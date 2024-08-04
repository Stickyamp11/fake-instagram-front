import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, signal, Signal,ViewChild, ViewChildren } from '@angular/core';
import { UserPublicationComponent } from '../user-publication/user-publication.component';
import { CommonModule } from '@angular/common';
import { PseudoGlobalStateService } from '../../pseudo-global-state.service';
import { Observable } from 'rxjs';
import { toSignal} from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-user-publications',
  standalone: true,
  imports: [UserPublicationComponent,CommonModule],
  templateUrl: './user-publications.component.html',
  styleUrl: './user-publications.component.scss'
})
export class UserPublicationsComponent implements AfterViewInit, OnDestroy, OnInit {
  constructor(private pseudoGlobalStateService: PseudoGlobalStateService){
    this.publicationsSig = toSignal(this.pseudoGlobalStateService.publications$, {initialValue: []})
  }
  //publications$: Observable<Array<Publication>> = new Observable<Array<Publication>>([]);
  publicationsSig: Signal<Array<Publication>> = signal([]);

  @ViewChildren('pubElements') pubElements!: QueryList<ElementRef>;
  observer!: IntersectionObserver;
  

  ngOnInit(){
    this.pseudoGlobalStateService.publications$.subscribe((pubs) => {
      console.log("aaaa", pubs);
    })
    //this.publications$ = this.pseudoGlobalStateService.publications$;
  }

  ngAfterViewInit() {
    this.setupObserver();
    //this.observeLastElement();
  }
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupObserver() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadMoreItems();
          observer.unobserve(entry.target);  // Stop observing the current last element
        }
      });
    });
  }

  loadMoreItems() {
    console.log("loaded items");
    //this.publications = [...this.publications, {id:"",text:""}];
    this.pseudoGlobalStateService.fetchMorePublications();
    this.observeLastElement();
  }

  private observeLastElement() {
    console.log("observing last element,", this.pubElements.last.nativeElement);
      this.observer.observe(this.pubElements.last.nativeElement); 
  }
}
