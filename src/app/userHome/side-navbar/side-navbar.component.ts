import { Component } from '@angular/core';
import { ResponsiveHidder1100Directive } from '../../responsive-hidder.directive';
import { ResponsiveHidder700Directive } from '../../responsive-hidder-700.directive';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [ResponsiveHidder1100Directive,ResponsiveHidder700Directive],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

}
