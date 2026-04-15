import { TestBed } from '@angular/core/testing';

import { Onlineservice } from './onlineservice';

describe('Onlineservice', () => {
  let service: Onlineservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Onlineservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
