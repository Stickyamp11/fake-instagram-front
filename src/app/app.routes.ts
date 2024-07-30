import { Routes } from '@angular/router';
import { UserHomeComponent } from './userHome/user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import { StoriesPageComponent } from '../stories/stories-page/stories-page.component';

export const routes: Routes = [
  { path: 'home', component: UserHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'stories/:username/:storyId', component: StoriesPageComponent },

];
