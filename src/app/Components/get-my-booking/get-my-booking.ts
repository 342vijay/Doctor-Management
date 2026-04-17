import { Component, inject, OnInit, signal } from '@angular/core';
import { Getmybookingservice } from '../../Services/getmybookingservice';

@Component({
  selector: 'app-get-my-booking',
  imports: [],
  templateUrl: './get-my-booking.html',
  styleUrl: './get-my-booking.css',
})
export class GetMyBooking implements OnInit {
   service = inject(Getmybookingservice);

  bookings = signal<any[]>([]);

  patientId = 0; // later auth user id

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.service.getMyBookings(this.patientId)
      .subscribe(res => {
        this.bookings.set(res);
      });
  }

  deleteBooking(id:number) {

    const ok = confirm("Are you sure to cancel booking?");

    if(!ok) return;

    this.service.deleteBooking(id)
      .subscribe(res => {

        alert(res);

        this.loadBookings();
      });
  }
}
