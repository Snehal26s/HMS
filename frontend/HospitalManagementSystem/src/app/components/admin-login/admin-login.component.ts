import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    const data = {
      username: this.username,
      password: this.password,
      role: 'ROLE_ADMIN'
    };

    this.auth.login(data).subscribe({
      next: (res) => {
        localStorage.setItem('role', 'ROLE_ADMIN');
        this.router.navigate(['/admin-dashboard']);
      },
      error: () => {
        this.errorMsg = 'Invalid admin credentials';
      }
    });
  }
}

