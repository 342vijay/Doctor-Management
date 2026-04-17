import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.html',
  imports: [CommonModule],
  standalone: true, 
  styleUrls: ['./confirmation.css'],
})
export class Confirmation implements OnInit {

  bookingId: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const data = history.state;

    if (data && data.id) {
      this.bookingId = data.id;
    }
  }

  goToBookings() {
    this.router.navigate(['/myappointment']);
  }
}