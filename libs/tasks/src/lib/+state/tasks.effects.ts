import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  TasksActions,
  TasksActionTypes,
  LoadTasks,
  TasksLoaded
} from './tasks.actions';
import { TasksState } from './tasks.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class TasksEffects {
  @Effect() effect$ = this.actions$.ofType(TasksActionTypes.TasksAction);

  @Effect()
  loadTasks$ = this.dataPersistence.fetch(TasksActionTypes.LoadTasks, {
    run: (action: LoadTasks, state: TasksState) => {
      return new TasksLoaded(state);
    },

    onError: (action: LoadTasks, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TasksState>
  ) {}
}
