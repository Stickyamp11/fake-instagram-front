import { createReducer, on } from "@ngrx/store";
import { UserAuthStateInterface } from "./all.interface";
import * as Actions from "./actions";

export const initialState: UserAuthStateInterface = {
    isLoading: false,
    isAuth: false,
    username: '',
    error: null
}

export const reducers = createReducer(initialState, 
    on(Actions.getAuth, (state) => ({
    ...state,
    isLoading: true
    })),
    on(Actions.getAuthSuccess, (state,action) => ({
    ...state,
    isLoading: false,
    isAuth: action.auth
    })),
    on(Actions.getAuthFailure, (state,action) => ({
    ...state,
    isLoading: false,
    error: action.error
    }))      
)