import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-appointments',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule],
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {

  appointments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.http.get<any[]>('http://localhost:8080/api/appointments')
      .subscribe(data => this.appointments = data);
  }
}
