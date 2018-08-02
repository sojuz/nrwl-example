import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { tasksRoutes } from '@mastacode/tasks';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'tasks', children: tasksRoutes },
        {
          path: 'tasks-tasklists',
          loadChildren: '@mastacode/tasks/tasklists#TasksTasklistsModule'
        },
        {
          path: 'tasks-task',
          loadChildren: '@mastacode/tasks/task#TasksTaskModule'
        }
      ],
      {
        initialNavigation: 'enabled'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
