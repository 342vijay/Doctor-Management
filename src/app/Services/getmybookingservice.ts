import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Getmybookingservice {
  
  private http = inject(HttpClient);
  private url = 'https://localhost:7037/api/Appointment';

  getMyBookings(patientId:number){
    return this.http.get<any[]>(`${this.url}/mybooking/${patientId}`);
  }

  deleteBooking(id:number){
    return this.http.delete(`${this.url}/delete/${id}`,
      { responseType:'text' });
  }

}
