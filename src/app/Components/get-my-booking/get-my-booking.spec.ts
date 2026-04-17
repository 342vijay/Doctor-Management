import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyBooking } from './get-my-booking';

describe('GetMyBooking', () => {
  let component: GetMyBooking;
  let fixture: ComponentFixture<GetMyBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetMyBooking],
    }).compileComponents();

    fixture = TestBed.createComponent(GetMyBooking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
