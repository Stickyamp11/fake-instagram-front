import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PublicationsService } from './publications.service';

@Injectable({
  providedIn: 'root'
})
export class PseudoGlobalStateService {

  publications: Array<Publication> = [];
  public publications$: BehaviorSubject<Array<Publication>> = new BehaviorSubject<Array<Publication>>([]);
  publicationObserver!: IntersectionObserver;
  observedElements: Set<Element> = new Set();

  itemsPerPage: number = 5;

  constructor(private publicationsService: PublicationsService) { 
    this.fetchInitialPublications();
    this.setupObserver();
  }

  
  fetchInitialPublications(){
    this.publicationsService.getPublications(0,this.itemsPerPage).subscribe(publications => {
      this.AddPublications(publications);
    });
  }

  resetPublications(){
    this.publications = [];
    this.publications$.next(this.publications);
  }

  fetchMorePublications(){
    this.publicationsService.getPublications(this.publications.length ,this.publications.length + this.itemsPerPage).subscribe(publications => {
      this.AddPublications(publications);
    });
  }

  AddPublications(publications: Array<Publication>){
    if(publications.length == 0) return;

    this.publications.push(...publications);
    this.publications$.next(this.publications);
  }

  private setupObserver() {
    this.publicationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("intersecting");
          console.log(entry.target,"entry target");
          this.clearObservedElement(entry.target);
          this.fetchMorePublications();

        }
      });
    });
  }

  private clearObservedElement(element: Element) {
    this.publicationObserver.unobserve(element);  
  }

  public clearAllObservedElements(){
    this.observedElements.forEach(el => {
      this.clearObservedElement(el);
    });
    this.observedElements = new Set();
  }

  public addObservedElement(element: Element){
    this.observedElements.add(element);
  }

}
