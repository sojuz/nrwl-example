import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { tasksReducer, initialState as tasksInitialState } from './+state/tasks.reducer';
import { TasksEffects } from './+state/tasks.effects';

export const tasksRoutes: Route[] = [];
@NgModule({
  imports: [CommonModule, RouterModule, StoreModule.forFeature('tasks', tasksReducer, { initialState: tasksInitialState }), EffectsModule.forFeature([TasksEffects])],
  providers: [TasksEffects]
})
export class TasksModule {}
