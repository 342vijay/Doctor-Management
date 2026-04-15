import { Component, inject, OnInit, signal } from '@angular/core';
import { Onlineservice } from '../../Services/onlineservice';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SlotDto } from '../../Dto/SlotDto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-online',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './online.html',
  styleUrl: './online.css',
})
export class Online implements OnInit {
 service = inject(Onlineservice);
 patientName = new FormControl('');
age = new FormControl('');
issue = new FormControl('');
  specialties = signal<string[]>([]);
  doctors = signal<any[]>([]);
  slots = signal<any[]>([]);
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
      speciality: this.specialty.value
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
//load
  loadSlots() {
  if (!this.doctor.value || !this.date.value) return;

  const dto:SlotDto = {
    doctorId: this.doctor.value,
    date: this.date.value
  };

  this.service.getSlots(dto as SlotDto)
    .subscribe(res => {
      this.slots.set(res);

      // reset slot selection
      this.slot.setValue('');
    });
}
}
