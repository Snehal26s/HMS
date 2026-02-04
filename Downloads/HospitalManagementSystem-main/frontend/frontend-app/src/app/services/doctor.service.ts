import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'   // 🔥 THIS IS VERY IMPORTANT
})
export class DoctorService {

  private api = 'http://localhost:8080/api/doctor';

  constructor(private http: HttpClient) {}

  searchPatientByMobile(mobile: string) {
    return this.http.get<any>(`${this.api}/patient/mobile/${mobile}`);
  }
}
