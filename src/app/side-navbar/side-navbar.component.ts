import { Component } from '@angular/core';
import { ResponsiveHidder1100Directive } from '../responsive-hidder.directive';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [ResponsiveHidder1100Directive],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

}
