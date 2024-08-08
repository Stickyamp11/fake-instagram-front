import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, delay, from, map, Observable, of, shareReplay, Subject, throwError } from 'rxjs';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticatedEndpoint = environment.apiUrl + "/auth/isAuth";
  //isAuth$: Subject<boolean> = new Subject<boolean>();

  authCache: boolean | null = null;
  public userGuid: string = "";

  constructor(private http: HttpClient) {
    console.log("emitted next auth");
    //this.isAuthenticated().subscribe((isAuth) => {this.isAuth$.next(isAuth);});
   }

  isLoggedIn(): Observable<boolean>{
    console.log("emitted isAuth as observable");
    return of(true);
    //return this.isAuth$.asObservable();
  }

  clearAuthCache(){
    this.authCache = null;
  }

  isAuthenticated(): Observable<boolean> {
    //Fake response
    //return of(true);
    if(this.authCache != null) return of(this.authCache);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<isAuthenticatedResponse>(this.isAuthenticatedEndpoint, { headers, withCredentials: true })
      .pipe(
        map(response => {
          console.log("response", response);
          this.authCache = response.isAuthenticated;
          this.userGuid = response.userGuid;
          return response.isAuthenticated;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
