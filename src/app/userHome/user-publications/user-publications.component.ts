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
export class UserPublicationsComponent implements OnDestroy, OnInit {
  constructor(private pseudoGlobalStateService: PseudoGlobalStateService){
    this.publicationsSig = toSignal(this.pseudoGlobalStateService.publications$, {initialValue: []})
  }
  //publications$: Observable<Array<Publication>> = new Observable<Array<Publication>>([]);
  publicationsSig: Signal<Array<Publication>> = signal([]);

  @ViewChildren('pubElements') pubElements!: QueryList<ElementRef>;
  observer!: IntersectionObserver;
  

  ngOnInit(){
    this.observer = this.pseudoGlobalStateService.publicationObserver;
    this.pseudoGlobalStateService.publications$.subscribe((pubs) => {
      console.log("aaaa", pubs);
    })

    //this.setupObserver();

    //this.publications$ = this.pseudoGlobalStateService.publications$;
  }
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  /*private setupObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("intersecting");
          console.log(entry.target,"entry target");
          this.observer.unobserve(entry.target);  // Stop observing the current last element
          this.loadMoreItems();

        }
      });
    });
  }*/

  loadMoreItems() {
    //console.log("loaded items");
    //this.pseudoGlobalStateService.fetchMorePublications();
  }

}
