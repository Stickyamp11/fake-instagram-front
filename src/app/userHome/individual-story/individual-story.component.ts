import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual-story',
  standalone: true,
  imports: [],
  templateUrl: './individual-story.component.html',
  styleUrl: './individual-story.component.scss'
})
export class IndividualStoryComponent {
  linkToStory: string = '/stories/ewfwewef/fefwfwewef'

  constructor(private router: Router){}

  goToStory(){
    this.router.navigate([this.linkToStory]);
  }
}
