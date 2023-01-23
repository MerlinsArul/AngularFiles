import { TestBed } from '@angular/core/testing';

import { UsersideService } from './userside.service';

describe('JsonService', () => {
  let service: UsersideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
