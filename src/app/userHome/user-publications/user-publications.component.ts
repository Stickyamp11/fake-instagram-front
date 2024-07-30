import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserPublicationComponent } from '../user-publication/user-publication.component';
import { CommonModule } from '@angular/common';

interface Publication {
  id: string,
  text: string
}
@Component({
  selector: 'app-user-publications',
  standalone: true,
  imports: [UserPublicationComponent,CommonModule],
  templateUrl: './user-publications.component.html',
  styleUrl: './user-publications.component.scss'
})
export class UserPublicationsComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('pubElements') pubElements!: QueryList<ElementRef>;
  observer!: IntersectionObserver;
  publications: Publication[] = [
    {id:"",text:""},
    {id:"",text:""},
    {id:"",text:""}, 
    {id:"",text:""}, 
    {id:"",text:""}, 
    {id:"",text:""} 
  ]

  ngAfterViewInit() {
    this.setupObserver();
    this.observeLastElement();
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
    this.publications = [...this.publications, {id:"",text:""}];
    this.observeLastElement();
  }

  private observeLastElement() {
    console.log("observing last element,", this.pubElements.last.nativeElement);
      this.observer.observe(this.pubElements.last.nativeElement); 
  }
}
