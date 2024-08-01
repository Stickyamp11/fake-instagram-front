import { Injectable } from '@angular/core';
import { delay, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): Observable<boolean>{
    return of(true).pipe(delay(2000));
  }
}
