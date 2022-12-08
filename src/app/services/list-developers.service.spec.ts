import { TestBed } from '@angular/core/testing';

import { ListDevelopersService } from './list-developers.service';

describe('ListDevelopersService', () => {
  let service: ListDevelopersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDevelopersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
