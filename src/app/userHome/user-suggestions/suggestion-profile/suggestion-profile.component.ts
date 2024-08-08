import { booleanAttribute, Component, Input, OnInit } from '@angular/core';
import { ImageDummyService } from '../../../image-dummy.service';

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
  imageUrl: string = "";
  constructor(private imageDummyService: ImageDummyService){}
  ngOnInit(){
    if(this.isOwner){
      this.buttonActionText = "Cambiar"
    }
    this.imageUrl = this.imageDummyService.getFullPathToRandomUserImage();
  }
}
