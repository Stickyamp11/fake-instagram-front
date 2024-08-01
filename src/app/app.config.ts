import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { effects } from './redux/effects'
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { reducers } from './redux/reducers'
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
     provideRouter(routes),
     provideStore({reducers}),
     provideEffects(effects),
     //provideState({ name: 'auth', reducer: reducers }),
     //provideState({ name: 'isAuth', reducer: reducers }),
     provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
    ]
};
