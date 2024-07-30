import { Component } from '@angular/core';
import { SuggestionProfileComponent } from '../suggestion-profile/suggestion-profile.component';

@Component({
  selector: 'app-follow-suggestions-menu',
  standalone: true,
  imports: [SuggestionProfileComponent],
  templateUrl: './follow-suggestions-menu.component.html',
  styleUrl: './follow-suggestions-menu.component.scss'
})
export class FollowSuggestionsMenuComponent {

}
