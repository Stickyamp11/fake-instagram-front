import { Component } from '@angular/core';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { UserContentComponent } from '../user-content/user-content.component';
import { FollowSuggestionsMenuComponent } from '../user-suggestions/follow-suggestions-menu/follow-suggestions-menu.component';
import { NewPublicationsComponent } from '../../new-publications/new-publications.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [SideNavbarComponent, UserContentComponent, FollowSuggestionsMenuComponent, NewPublicationsComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent {

}
