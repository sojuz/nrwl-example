import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { tasksRoutes } from '@mastacode/tasks';
import { GoogleApiService } from '@mastacode/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  appReducer,
  initialState as appInitialState
} from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { GoogleApiAuthGuard } from '@mastacode/core';
import { authRoutes } from '@mastacode/auth';
import { CoreModule } from '@mastacode/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', children: tasksRoutes, canActivate: [GoogleApiAuthGuard] },
        { path: 'auth', children: authRoutes }
      ],
      {
        initialNavigation: 'enabled',
        enableTracing: true
      }
    ),
    StoreModule.forRoot(
      { app: appReducer },
      {
        initialState: { app: appInitialState }
        /**
         * fix for that is somewhere in:
         * https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer
         * OR
         * should be fixed in next v
         */
        //metaReducers : !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  providers: [
    {
      /**
       * https://juristr.com/blog/2018/01/ng-app-runtime-config/#runtime-configuration
       * only promises in APP_INITIALIZER
       */
      provide: APP_INITIALIZER,
      useFactory: (googleApi: GoogleApiService) => () =>
        googleApi.initClient().toPromise(),
      multi: true,
      deps: [GoogleApiService]
    },
    AppEffects
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
