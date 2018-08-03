import { Action } from '@ngrx/store';

export enum TasksActionTypes {
  TasksAction = '[Tasks] Action',
  LoadTasks = '[Tasks] Load Data',
  TasksLoaded = '[Tasks] Data Loaded'
}

export class Tasks implements Action {
  readonly type = TasksActionTypes.TasksAction;
}
export class LoadTasks implements Action {
  readonly type = TasksActionTypes.LoadTasks;
  constructor(public payload: any) {}
}

export class TasksLoaded implements Action {
  readonly type = TasksActionTypes.TasksLoaded;
  constructor(public payload: any) {}
}

export type TasksActions = Tasks | LoadTasks | TasksLoaded;
