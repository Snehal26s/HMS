import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,   // add this if not already present
  templateUrl: './admin-dashboard.component.html',
  imports: [
    CommonModule,
    RouterModule,
    
    RouterLink
  ],
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  // 🔹 Dashboard stats (temporary static values)
  totalPatients: number = 120;
  totalDoctors: number = 15;
  todayAppointments: number = 8;

  constructor(private router: Router) {}

  // Logout function
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}










// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { RouterOutlet, RouterLink } from '@angular/router'; // ✅ Import these

// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-admin-dashboard',
//   templateUrl: './admin-dashboard.component.html',
//   imports: [
//     CommonModule,
//     RouterModule,     // ✅ ensures router directives are recognized
//     RouterOutlet,     // ✅ needed for <router-outlet>
//     RouterLink        // ✅ needed for routerLink=""
//   ],
//   styleUrls: ['./admin-dashboard.component.css']
// })
// export class AdminDashboardComponent {

//   constructor(private router: Router) {}

//   // ✅ Logout function
//   logout() {
//     localStorage.clear();
//     sessionStorage.clear();
//     this.router.navigate(['/home']); // Redirect to home page
//   }
// }

