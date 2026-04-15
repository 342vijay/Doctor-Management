import { TestBed } from '@angular/core/testing';

import { Offlineservice } from './offlineservice';

describe('Offlineservice', () => {
  let service: Offlineservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Offlineservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
