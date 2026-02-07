import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    const data = {
      username: this.username,
      password: this.password,
      role: 'ROLE_DOCTOR'
    };

    this.auth.login(data).subscribe({
      next: (res) => {
        localStorage.setItem('role', 'ROLE_DOCTOR');
        this.router.navigate(['/doctor-dashboard']);
      },
      error: () => {
        this.errorMsg = 'Invalid doctor credentials';
      }
    });
  }
}

