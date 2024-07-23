import { Component } from '@angular/core';
import { UserPublicationsComponent } from '../user-publications/user-publications.component';
import { UserStoriesComponent } from '../user-stories/user-stories.component';

@Component({
  selector: 'app-user-content',
  standalone: true,
  imports: [UserPublicationsComponent, UserStoriesComponent],
  templateUrl: './user-content.component.html',
  styleUrl: './user-content.component.scss'
})
export class UserContentComponent {

}
