import { Component, inject, OnInit, signal } from '@angular/core';
import { Onlineservice } from '../../Services/onlineservice';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SlotDto } from '../../Dto/SlotDto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-online',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './online.html',
  styleUrl: './online.css',
})
export class Online implements OnInit {
 service = inject(Onlineservice);
 patientName = new FormControl('');
 private router=inject(Router);
  formatDate(date: any): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
age = new FormControl('');
issue = new FormControl('');
  specialties = signal<string[]>([]);
  doctors = signal<any[]>([]);
  slots = signal<string[]>([]);
  specialty = new FormControl('');
  doctor = new FormControl(0);
  date = new FormControl('');
  slot = new FormControl('');
   ngOnInit() {
    this.service.getSpecialties().subscribe(res => {
      this.specialties.set(res);
    });
    
  }
  //load doctors based on speciality
   loadDoctors() {
    if (!this.specialty.value) return;

    const dto = {
      mode: 'Online',
      specialization : this.specialty.value
    };

    this.service.getDoctorBySpeciality(dto)
      .subscribe(res => {
        this.doctors.set(res);

        // reset dependent fields
        this.doctor.setValue(0);
        this.slots.set([]);
        this.slot.setValue('');
      });
  }
  constructor(private http: HttpClient) {}
//load
   loadSlots() {
  const doctorIdValue = this.doctor.value;
  const dateValue = this.date.value;

  if (!doctorIdValue || doctorIdValue === 0 || !dateValue) return;

  const dto: SlotDto = {
    // Ensure this is a number, not a string from the HTML select
    doctorId: Number(doctorIdValue), 
    // yyyy-MM-dd is the standard ISO format DateOnly expects
    date: this.formatDate(dateValue) 
  };

  this.service.getSlots(dto).subscribe({
    next: (res) => {
       this.slot.setValue('');
      this.slots.set(res);
   
    },
    error: (err) => {
      console.error("Backend Validation Error:", err.error);
    }
  });
  console.log("DTO:", dto);
}
message = signal('');

bookAppointment() {

  const confirmBooking = confirm("Are you sure you want to book this appointment?");

  if (!confirmBooking) {
    return;
  }

  const data = {
    patientName: this.patientName.value,
    age: Number(this.age.value),
    issue: this.issue.value,
    speciality: this.specialty.value,
    doctorId: Number(this.doctor.value),
    date: this.date.value,
    slot: this.slot.value
  };

  this.http.post('https://localhost:7037/api/Appointment/book', data,
    { responseType: 'text' })
    .subscribe({
      next: (res) => {

        alert(res);

        this.router.navigate(['/success'], {
          state: { message: res }
        });

      },
      error: () => {
        alert("Booking Failed");
      }
    });
}

}
