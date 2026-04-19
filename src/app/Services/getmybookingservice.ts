import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Getmybookingservice {

  private http = inject(HttpClient);
  private url = 'https://localhost:7037/api/Appointment';

  //  No patientId (comes from JWT in backend)
  getMyBookings() {
    return this.http.get<any[]>(`${this.url}/mybooking`);
  }

  //  Send bookingId (user selects which booking)
  deleteBooking(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`, {
      responseType: 'text'
    });
  }
  getMode(id: number) {
  return this.http.get(`https://localhost:7037/api/Doctor/mode/${id}`, {
    responseType: 'text' as const
  });
}
}