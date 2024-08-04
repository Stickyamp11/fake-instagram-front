import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PseudoGlobalStateService {

  publications: Array<Publication> = [];
  public publications$: BehaviorSubject<Array<Publication>> = new BehaviorSubject<Array<Publication>>([]);

  constructor() { 
    this.fetchPublications();
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

}
