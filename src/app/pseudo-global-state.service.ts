import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PseudoGlobalStateService {

  publications: Array<Publication> = [];
  public publications$: BehaviorSubject<Array<Publication>> = new BehaviorSubject<Array<Publication>>([]);
  publicationObserver!: IntersectionObserver;
  observedElements: Set<Element> = new Set();

  constructor() { 
    this.fetchPublications();
    this.setupObserver();
  }

  
  fetchPublications(){
   //fake for now 
   this.publications = [
    {id:"",text:""},
    {id:"",text:""},
    {id:"",text:""}, 
    {id:"",text:""}, 
    {id:"",text:""}, 
    {id:"",text:""} 
  ]
  this.publications$.next(this.publications);
  }

  resetPublications(){
    this.publications = [];
    this.publications$.next(this.publications);
  }

  fetchMorePublications(){
    this.publications.push({id:"",text:""});
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
