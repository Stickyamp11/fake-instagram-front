import { createAction, props } from "@ngrx/store";

//For Async code: Start,Success,Failure
export const getAuth = createAction('[Auth] Get Auth')
export const getAuthSuccess = createAction('[Auth] Get Auth success', props<{auth: boolean}>())
export const getAuthFailure = createAction('[Auth] Get Auth failure', props<{error: string}>())