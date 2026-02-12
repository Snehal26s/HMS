import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = 'https://hms-8-scrx.onrender.com/api/v1/patients';

  constructor(private http: HttpClient) { }

  // GET all patients
  getPatientList(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseURL);
  }

  // ADD patient
  addPatient(patient: Patient): Observable<Object> {
    return this.http.post(this.baseURL, patient);
  }

  // UPDATE patient
  updatePatient(id: number, patient: Patient): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, patient);
  }

  // DELETE patient
  deletePatient(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}









// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Patient } from './patient'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientService {

//   private baseURL = 'http://localhost:8080/api/v1/patients';

// constructor(private http: HttpClient) {}

//   getPatientList(): Observable<Patient[]> {
//     return this.http.get<Patient[]>(this.baseURL);
//   }

//   addPatient(patient: Patient): Observable<Patient> {
//     return this.http.post<Patient>(this.baseURL, patient);
//   }

//   updatePatient(id: number, patient: Patient): Observable<Patient> {
//     return this.http.put<Patient>(`${this.baseURL}/${id}`, patient);
//   }

//   deletePatient(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseURL}/${id}`);
//   }

//   updatePrescription(patient: Patient): Observable<Patient> {
//     return this.http.put<Patient>(
//       `${this.baseURL}/${patient.id}/prescription`,
//       {
//         prescription: patient.prescription,
//         dose: patient.dose,
//         urgency: patient.urgency
//       }
//     );
//   }

//   getAppointments(patientId: number): Observable<any[]> {
//     return this.http.get<any[]>(`${this.baseURL}/${patientId}/appointments`);
//   }

// addPrescription(patientId: number, prescriptionData: any): Observable<any> {
//   return this.http.post(`${this.baseURL}/${patientId}/prescriptions`, prescriptionData);
// }

// getPrescriptions(patientId: number): Observable<any[]> {
//   return this.http.get<any[]>(`${this.baseURL}/${patientId}/prescriptions`);
// }


// }

