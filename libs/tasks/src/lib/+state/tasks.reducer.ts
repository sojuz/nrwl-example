import { Action } from '@ngrx/store';
import { TasksActions, TasksActionTypes } from './tasks.actions';

/**
 * Interface for the 'Tasks' data used in
 *  - TasksState, and
 *  - tasksReducer
 */
export interface TasksData {}

/**
 * Interface to the part of the Store containing TasksState
 * and other information related to TasksData.
 */
export interface TasksState {
  readonly tasks: TasksData;
}

export const initialState: TasksData = {};

export function tasksReducer(
  state = initialState,
  action: TasksActions
): TasksData {
  switch (action.type) {
    case TasksActionTypes.TasksAction:
      return state;

    case TasksActionTypes.TasksLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
