import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { DoctorDto } from "../Dto/DoctorDto";
import { SlotDto } from "../Dto/SlotDto";


@Injectable({
  providedIn: 'root',
})
export class Offlineservice {
   private baseUrl='';
  private http=inject(HttpClient)
  getSpecialties() {
    return this.http.get<string[]>(`${this.baseUrl}/speciality`);
  }
  getDoctorBySpeciality(dto:DoctorDto)
  {
    return this.http.post<any[]>(`${this.baseUrl}/doctor`,dto);
  }
getSlots(dto: SlotDto) {
  return this.http.post<any[]>(
    `${this.baseUrl}/slots`,
    dto
  );
}



}
