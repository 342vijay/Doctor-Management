import { TestBed } from '@angular/core/testing';

import { Getmybookingservice } from './getmybookingservice';

describe('Getmybookingservice', () => {
  let service: Getmybookingservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getmybookingservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
