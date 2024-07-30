import { Component } from '@angular/core';
import { IndividualStoryComponent } from '../../app/userHome/individual-story/individual-story.component';

@Component({
  selector: 'app-mini-story',
  standalone: true,
  imports: [IndividualStoryComponent],
  templateUrl: './mini-story.component.html',
  styleUrl: './mini-story.component.scss'
})
export class MiniStoryComponent {

}
