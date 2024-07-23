import { Component } from '@angular/core';
import { UserPublicationComponent } from '../user-publication/user-publication.component';

interface Publication {
  id: string,
  text: string
}
@Component({
  selector: 'app-user-publications',
  standalone: true,
  imports: [UserPublicationComponent],
  templateUrl: './user-publications.component.html',
  styleUrl: './user-publications.component.scss'
})
export class UserPublicationsComponent {
  publications: Publication[] = [
    {id:"",text:""},
    {id:"",text:""},
    {id:"",text:""}, 
    {id:"",text:""}, 
    {id:"",text:""}, 
    {id:"",text:""} 
  ]
}
