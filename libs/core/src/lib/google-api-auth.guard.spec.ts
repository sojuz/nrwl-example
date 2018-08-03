import { TestBed, async, inject } from '@angular/core/testing';

import { GoogleApiAuthGuard } from './google-api-auth.guard';

describe('GoogleApiAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleApiAuthGuard]
    });
  });

  it(
    'should ...',
    inject([GoogleApiAuthGuard], (guard: GoogleApiAuthGuard) => {
      expect(guard).toBeTruthy();
    })
  );
});
