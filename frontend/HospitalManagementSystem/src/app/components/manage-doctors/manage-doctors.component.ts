import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-doctors',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterModule],
  templateUrl: './manage-doctors.component.html',
  styleUrls: ['./manage-doctors.component.css']
})
export class ManageDoctorsComponent implements OnInit {

  doctors: any[] = [];
  doctor = { name: '', specialization: '', contact: '', email: '' };

  editingDoctorId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors() {
    this.http.get<any[]>('http://localhost:8080/api/doctors')
      .subscribe(data => this.doctors = data);
  }

  addDoctor() {
    if (!this.doctor.name || !this.doctor.specialization ||
        !this.doctor.contact || !this.doctor.email) {
      alert('Please fill all fields');
      return;
    }

    this.http.post('http://localhost:8080/api/doctors', this.doctor)
      .subscribe(() => {
        this.loadDoctors();
        this.resetForm();
      });
  }

  editDoctor(d: any) {
    this.doctor = { ...d };
    this.editingDoctorId = d.id;
  }

  updateDoctor() {
    this.http.put(
      `http://localhost:8080/api/doctors/${this.editingDoctorId}`,
      this.doctor
    ).subscribe(() => {
      this.loadDoctors();
      this.resetForm();
    });
  }

  deleteDoctor(id: number) {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.http.delete(`http://localhost:8080/api/doctors/${id}`)
        .subscribe(() => this.loadDoctors());
    }
  }

  resetForm() {
    this.doctor = { name: '', specialization: '', contact: '', email: '' };
    this.editingDoctorId = null;
  }
}
