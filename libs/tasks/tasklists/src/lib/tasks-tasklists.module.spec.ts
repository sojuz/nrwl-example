import { async, TestBed } from '@angular/core/testing';
import { TasksTasklistsModule } from './tasks-tasklists.module';

describe('TasksTasklistsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [TasksTasklistsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(TasksTasklistsModule).toBeDefined();
  });
});
