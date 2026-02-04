import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {

  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.errorMsg = '';

    this.authService.login(this.username, this.password)
      .subscribe({
        next: (res) => {
          this.authService.saveToken(res.token);

          const role = this.authService.getRole();
          if (role === 'ROLE_DOCTOR') {
            this.router.navigate(['/doctor-dashboard']);
          } else {
            this.errorMsg = 'Not a doctor account';
          }
        },
        error: () => {
          this.errorMsg = 'Invalid username or password';
        }
      });
  }
}



// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-doctor-login',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './doctor-login.component.html',
//   styleUrls: ['./doctor-login.component.css']
// })
// export class DoctorLoginComponent {
//   username = '';
//   password = '';
//   errorMsg = '';

//   constructor(private auth: AuthService, private router: Router) {}

// onSubmit() {
//   const payload = {
//     username: this.username.trim(),
//     password: this.password.trim(),
//     role: 'doctor'
//   };

//   this.auth.login(payload).subscribe({
//     next: (res) => {
//       if (res.role === 'doctor') {
//         localStorage.setItem('userRole', 'doctor'); // ✅ store role
//         alert('Doctor login successful');
//         this.router.navigate(['/doctor-dashboard']);
//       } else {
//         this.errorMsg = 'Not a doctor account';
//       }
//     },
//     error: () => this.errorMsg = 'Invalid username or password'
//   });
// }
// }





