import { Component, inject, OnInit, signal } from '@angular/core';
import { Getmybookingservice } from '../../Services/getmybookingservice';

// ✅ Strong typing (fixes TS7053 error)
type Booking = {
  appointmentId: number;
  patientName: string;
  date: string;
  slot: string;
};

@Component({
  selector: 'app-get-my-booking',
  templateUrl: './get-my-booking.html',
  styleUrl: './get-my-booking.css',
})
export class GetMyBooking implements OnInit {

  service = inject(Getmybookingservice);

  //  typed signal
  bookings = signal<Booking[]>([]);

  //  signal (fix UI not updating)
  modes = signal<{ [key: number]: string }>({});

  meetingLink = "https://meet.google.com/gfz-knxe-bkt";
  address = "Apollo Hospital, Chennai";

  ngOnInit() {
    this.loadBookings();
  }

  // load bookings
  loadBookings() {
    this.service.getMyBookings().subscribe(res => {
      console.log("Bookings:", res);

      this.bookings.set(res);

      res.forEach((b: Booking) => {
        this.getMode(b.appointmentId);
      });
    });
  }

  // get mode
  getMode(id: number) {
    this.service.getMode(id).subscribe({
      next: (data: any) => {
        console.log("Mode:", id, data);

        // IMPORTANT: trigger UI update
        this.modes.update(current => ({
          ...current,
          [id]: data
        }));
      },
      error: (err) => {
        console.error("Mode API ERROR:", err);
      }
    });
  }

  // delete booking
  deleteBooking(id: number) {
    const ok = confirm("Are you sure to cancel booking?");
    if (!ok) return;

    this.service.deleteBooking(id).subscribe(res => {
      alert(res);
      this.loadBookings();
    });
  }
}