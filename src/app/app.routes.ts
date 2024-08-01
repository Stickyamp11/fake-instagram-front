import { Routes } from '@angular/router';
import { UserHomeComponent } from './userHome/user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import { StoriesPageComponent } from '../stories/stories-page/stories-page.component';
import { AuthGuard } from './auth-guard.guard';
import { SkeletonImageComponent } from './modals/skeleton-image/skeleton-image.component';

export const routes: Routes = [
  { path: 'home', component: UserHomeComponent, canActivate: [] },
  { path: 'login', component: LoginComponent },
  { path: 'stories/:username/:storyId', component: StoriesPageComponent, canActivate: [] },
  { path: 'test', component: SkeletonImageComponent },

];
