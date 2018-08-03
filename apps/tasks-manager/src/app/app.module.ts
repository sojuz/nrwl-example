import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { tasksRoutes } from '@mastacode/tasks';
import { GoogleApiService } from '@mastacode/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'tasks', children: tasksRoutes },
        {
          path: '',
          loadChildren: '@mastacode/tasks/tasklists#TasksTasklistsModule'
        },
        {
          path: 'task',
          loadChildren: '@mastacode/tasks/task#TasksTaskModule'
        }
      ],
      {
        initialNavigation: 'enabled'
      }
    )
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
