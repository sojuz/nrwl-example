import { async, TestBed } from '@angular/core/testing';
import { TasksTaskModule } from './tasks-task.module';

describe('TasksTaskModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [TasksTaskModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(TasksTaskModule).toBeDefined();
  });
});
