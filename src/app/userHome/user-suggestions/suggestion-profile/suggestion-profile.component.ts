import { booleanAttribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-profile',
  standalone: true,
  imports: [],
  templateUrl: './suggestion-profile.component.html',
  styleUrl: './suggestion-profile.component.scss'
})
export class SuggestionProfileComponent implements OnInit{
  @Input({ transform: booleanAttribute }) isOwner: boolean = false;
  buttonActionText = "Seguir";
  constructor(){}
  ngOnInit(){
    if(this.isOwner){
      this.buttonActionText = "Cambiar"
    }
  }
}
