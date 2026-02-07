
import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';
import { ManageDoctorsComponent } from './components/manage-doctors/manage-doctors.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'doctor-login', component: DoctorLoginComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },

  { path: 'add-patient', component: AddPatientComponent },
  { path: 'view-patients', component: ViewPatientsComponent },

  { path: 'manage-doctors', component: ManageDoctorsComponent },

  { path: 'appointment', component: AppointmentComponent },
  { path: 'view-appointments', component: ViewAppointmentsComponent },

  { path: '**', redirectTo: '/home' } // fallback
];













// import { HomeComponent } from './components/home/home.component';
// import { AdminLoginComponent } from './components/admin-login/admin-login.component';
// import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
// import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
// import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
// import { AddPatientComponent } from './components/add-patient/add-patient.component';
// import { Routes } from '@angular/router';
// import { AppointmentComponent } from './components/appointment/appointment.component';
// import { ViewPatientsComponent } from './components/view-patients/view-patients.component';
// import { ManageDoctorsComponent } from './components/manage-doctors/manage-doctors.component';
// import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';

// // ✅ Export the routes
// export const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'admin-login', component: AdminLoginComponent },
//   { path: 'doctor-login', component: DoctorLoginComponent },
//  // { path: 'admin-dashboard', component: AdminDashboardComponent },
//   { path: 'doctor-dashboard', component: DoctorDashboardComponent },
//  // { path: 'add-patient', component: AddPatientComponent },

//   { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
//   { path: 'admin-dashboard', component: AdminDashboardComponent },
//   { path: 'add-patient', component: AddPatientComponent },
//   { path: 'appointment', component: AppointmentComponent },

//   { path: 'admin-dashboard', component: AdminDashboardComponent },

//   { path: 'add-patient', component: AddPatientComponent },
//   { path: 'view-patients', component: ViewPatientsComponent },
//   { path: 'manage-doctors', component: ManageDoctorsComponent },
//   { path: 'appointment', component: AppointmentComponent },
//   { path: 'view-appointments', component: ViewAppointmentsComponent },
// ];




// // import { Routes } from '@angular/router';
// // import { HomeComponent } from './components/home/home.component';
// // import { AdminLoginComponent } from './components/admin-login/admin-login.component';
// // import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
// // import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
// // import { AddPatientComponent } from './components/add-patient/add-patient.component';
// // import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
// // import { PatientComponent } from './components/patient/patient.component';

// // export const routes: Routes = [
// //   { path: '', component: HomeComponent },
// //   { path: 'admin-login', component: AdminLoginComponent },
// //   { path: 'doctor-login', component: DoctorLoginComponent },
// //   { path: 'doctor-dashboard', component: DoctorDashboardComponent },
// //   { path: 'admin-dashboard', component: AdminDashboardComponent, children: [
// //       { path: 'add-patient', component: AddPatientComponent },
// //       { path: 'patients', component: PatientComponent },
// //         { path: 'doctor-dashboard', component: DoctorDashboardComponent }, // ✅ must match exact path

// //       { path: '', redirectTo: '/patients', pathMatch: 'full' }
// //   ]}
// // ];
