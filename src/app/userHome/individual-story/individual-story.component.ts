import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkeletonImageComponent } from '../../modals/skeleton-image/skeleton-image.component';
import { ImageDummyService } from '../../image-dummy.service';

@Component({
  selector: 'app-individual-story',
  standalone: true,
  imports: [SkeletonImageComponent],
  templateUrl: './individual-story.component.html',
  styleUrl: './individual-story.component.scss'
})
export class IndividualStoryComponent implements OnInit {
  linkToStory: string = '/stories/ewfwewef/fefwfwewef'
  imageUrl: string = "";

  constructor(private router: Router, private imageDummyService: ImageDummyService){}

  ngOnInit(){
    //this.imageUrl = "../../assets/profile" + this.getRandomNumberBetween(1,20) + ".png";
    this.imageUrl = this.imageDummyService.getFullPathToRandomUserImage();
  }
  goToStory(){
    this.router.navigate([this.linkToStory]);
  }

  getRandomNumberBetween(x: number, y: number): number {
    return Math.floor(Math.random() * (y - x + 1)) + x;
}
}
