import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListsComponent } from './task-lists/task-lists.component';
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: TaskListsComponent }
    ])
  ],
  declarations: [TaskListsComponent]
})
export class TasksTasklistsModule {}
