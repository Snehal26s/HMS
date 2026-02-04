// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { AppointmentService } from '../../services/appointment.service';
// import { Router } from '@angular/router';  // ✅ Import Router

// @Component({
//   selector: 'app-doctor-dashboard',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './doctor-dashboard.component.html',
//       styleUrls: ['./doctor-dashboard.component.css']

// })
// export class DoctorDashboardComponent implements OnInit {

//   appointments: any[] = [];
//   selectedAppointment: any = null;
//   prescriptionText: string = '';

//   constructor(private appointmentService: AppointmentService,
//               private router: Router) {} // ✅ Inject Router


//   ngOnInit(): void {
//     this.loadAppointments();
//   }
// loadAppointments() {
//   this.appointmentService.getTodayAppointments().subscribe(data => {
//     this.appointments = data;
//   });
// }


//   // When doctor clicks Add Prescription
//   addPrescription(appointment: any) {
//     this.selectedAppointment = appointment;
//     this.prescriptionText = appointment.prescription || '';
//   }

//   // Save prescription
// savePrescription() {
//   if (this.selectedAppointment) {
//     this.appointmentService
//       .updatePrescription(this.selectedAppointment.id, this.prescriptionText)
//       .subscribe((updated: any) => {
//         this.selectedAppointment.prescription = updated.prescription;
//         alert(`Prescription updated for ${this.selectedAppointment.patientName}`);
//         this.selectedAppointment = null;
//         this.prescriptionText = '';
//         this.loadAppointments(); // reloads table
//       });
//   }
// }




//   cancelPrescription() {
//     this.selectedAppointment = null;
//     this.prescriptionText = '';
//   }


//  logout() {
//     localStorage.clear();
//     sessionStorage.clear();
//     this.router.navigate(['/home']); // redirect to home page
//   }


  
// }





import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppointmentService } from '../../services/appointment.service';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  // 🔹 Appointments
  appointments: any[] = [];

  // 🔹 Prescription
  selectedAppointment: any = null;
  prescriptionText: string = '';

  // 🔹 Patient Search
  mobile: string = '';
  patient: any = null;

  constructor(
    private appointmentService: AppointmentService,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  // ===============================
  // Appointments
  // ===============================
  loadAppointments() {
    this.appointmentService.getTodayAppointments()
      .subscribe(data => {
        this.appointments = data;
      });
  }

  addPrescription(appointment: any) {
    this.selectedAppointment = appointment;
    this.prescriptionText = appointment.prescription || '';
  }

  savePrescription() {
    if (!this.selectedAppointment) return;

    this.appointmentService
      .updatePrescription(this.selectedAppointment.id, this.prescriptionText)
      .subscribe((updated: any) => {

        alert(`Prescription updated for ${updated.patientName}`);

        this.selectedAppointment = null;
        this.prescriptionText = '';
        this.loadAppointments();
      });
  }

  cancelPrescription() {
    this.selectedAppointment = null;
    this.prescriptionText = '';
  }

  // ===============================
  // Patient Search by Mobile
  // ===============================
  searchPatient() {
    if (!this.mobile) {
      alert('Please enter mobile number');
      return;
    }

    this.doctorService.searchPatientByMobile(this.mobile)
      .subscribe({
        next: data => {
          this.patient = data;
        },
        error: () => {
          alert('Patient not found');
          this.patient = null;
        }
      });
  }

  // ===============================
  // Logout
  // ===============================
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}
