import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SkeletonImageComponent } from '../../modals/skeleton-image/skeleton-image.component';

@Component({
  selector: 'app-individual-story',
  standalone: true,
  imports: [SkeletonImageComponent],
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
