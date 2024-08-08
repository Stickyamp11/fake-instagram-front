import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from './environment/environment';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  publicationsEndpoint: string = environment.apiUrl + "/publication";


  getPublications(range_min: number, range_max: number): Observable<Array<Publication>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Array<Publication>>(this.publicationsEndpoint + "/" + this.authService.userGuid,
      { headers,
        withCredentials: true,
        params: new HttpParams().set('range', range_min.toString() + "-" + range_max.toString()) 
      })
      .pipe(
        map(response => {
          console.log("response-publications", response);
          return response;
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
