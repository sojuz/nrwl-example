import { TestBed, inject } from '@angular/core/testing';

import { GoogleTasksApiService } from './google-tasks-api.service';

describe('GoogleTasksApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleTasksApiService]
    });
  });

  it(
    'should be created',
    inject([GoogleTasksApiService], (service: GoogleTasksApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
