import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { TasksEffects } from './tasks.effects';
import { LoadTasks, TasksLoaded } from './tasks.actions';

import { Observable } from 'rxjs';

describe('TasksEffects', () => {
  let actions$: Observable<any>;
  let effects$: TasksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        TasksEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(TasksEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadTasks({}) });
      expect(effects$.loadTasks$).toBeObservable(
        hot('-a-|', { a: new TasksLoaded({}) })
      );
    });
  });
});
