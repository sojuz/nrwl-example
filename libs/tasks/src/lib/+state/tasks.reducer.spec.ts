import { TasksLoaded } from './tasks.actions';
import { tasksReducer, initialState } from './tasks.reducer';

describe('tasksReducer', () => {
  it('should work', () => {
    const action: TasksLoaded = new TasksLoaded({});
    const actual = tasksReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
