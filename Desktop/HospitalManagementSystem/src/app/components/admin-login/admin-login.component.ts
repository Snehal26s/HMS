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
      password: this.password
    };

    this.auth.login(data).subscribe({
      next: (res: any) => {

        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);

        if (res.role && res.role.toLowerCase() === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.errorMsg = 'Invalid admin credentials';
        }
      },
      error: () => {
        this.errorMsg = 'Invalid admin credentials';
      }
    });
  }
}
