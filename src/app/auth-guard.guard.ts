import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as Actions from './redux/actions';
import { isAuthSelector, isLoadingSelector } from './redux/selectors';
import { AppStateInterface } from './redux/all.interface';
function wait(ms: any) {
  const start = new Date().getTime();
  let now = start;
  while (now - start < ms) {
    now = new Date().getTime();
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //isAuthLoading$: Observable<boolean | undefined>;
  constructor(
    private router: Router,
    private store: Store<AppStateInterface>,
    private authService: AuthService){
      //this.store.select(isAuthSelector).subscribe(() => );
      //console.log("triggered constructor");
      //this.store.select(isAuthSelector).subscribe();
      //this.store.dispatch(Actions.getAuth());
      //this.isAuthLoading$ = this.store.pipe(select(isLoadingSelector));
    }

  canActivate(): Observable<boolean> {
    //return this.store.select(state => state.auth.isLoggedIn).pipe(
     // take(1),
     //this.store.dispatch(Actions.getAuth());
    // wait(5000);
    //console.log("1111");
    //return this.authService.isLoggedIn().pipe(
    //return of(true);
    /*return this.store.select(isAuthSelector).pipe(
      tap(() => {console.log("entrando")}),
      filter(value => value !== undefined),
      map(loggedIn => {
        console.log("1112");
        if (!loggedIn) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );*/
    console.log("hey");

    return this.authService.isAuthenticated().pipe(
      tap((isAuth) => {console.log(isAuth,"isAuth")}),
      map(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }
    )
   )
  }
}