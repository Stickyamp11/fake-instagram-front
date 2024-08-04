import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, delay, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {
    console.log("emitted next auth");
    this.isAuth$.next(true);
   }

  isLoggedIn(): Observable<boolean>{
    return this.isAuth$.asObservable();
  }
}
