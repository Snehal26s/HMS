import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-patients',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {

  patients: any[] = [];
  filteredPatients: any[] = [];
  searchText: string = '';

  editingId: number | null = null;
  editPatientData: any = {};

  constructor(private http: HttpClient) {}



  appointments: any[] = [];

ngOnInit(): void {
  this.loadAppointments();
}

loadAppointments() {
  this.http.get<any[]>('http://localhost:8080/api/appointments')
    .subscribe(data => this.appointments = data);
}



  // Load all patients
  loadPatients() {
    this.http.get<any[]>('http://localhost:8080/api/v1/patients')
      .subscribe({
        next: (data) => {
          this.patients = data;
          this.filteredPatients = data;
        },
        error: () => alert('Failed to load patients')
      });
  }

  // Search by name
  searchPatient() {
    const text = this.searchText.toLowerCase();
    this.filteredPatients = this.patients.filter(p =>
      p.name.toLowerCase().includes(text)
    );
  }

  // Edit patient
  editPatient(patient: any) {
    this.editingId = patient.id;
    this.editPatientData = { ...patient };
  }

  // Update patient
  updatePatient() {
    this.http.put(
      `http://localhost:8080/api/v1/patients/${this.editPatientData.id}`,
      this.editPatientData
    ).subscribe(() => {
      this.editingId = null;
      this.loadPatients();
    });
  }

  // Cancel edit
  cancelEdit() {
    this.editingId = null;
  }

  // Delete patient
  deletePatient(id: number) {
    if (confirm('Are you sure you want to delete this patient?')) {
      this.http.delete(`http://localhost:8080/api/v1/patients/${id}`)
        .subscribe(() => this.loadPatients());
    }
  }
}
