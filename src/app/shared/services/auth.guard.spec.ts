import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide:ToastrService, useValue:ToastrService}]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
