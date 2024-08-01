import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as MyActions from './actions'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "../auth-service.service";

@Injectable()
export class effects{
    constructor(private actions$: Actions, private authService: AuthService){}

    getAuth$ = createEffect(() => 
        this.actions$.pipe(ofType(MyActions.getAuth), mergeMap(() => {
            return this.authService.isLoggedIn()
                .pipe(
                tap((auth) => {console.log("hi",auth)}),
                map(auth => MyActions.getAuthSuccess({auth})),
                catchError((error) => of(MyActions.getAuthFailure({error: error.message})))
                )
        }))
    );

}