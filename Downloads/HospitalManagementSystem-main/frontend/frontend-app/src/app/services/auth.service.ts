import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  // 🔐 Login API
  login(username: string, password: string) {
    return this.http.post<any>(this.api, {
      username,
      password
    });
  }

  // 💾 Save JWT token
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // 📥 Get JWT token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // 👤 Extract role from JWT
  getRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role;
  }

  // 🚪 Logout
  logout() {
    localStorage.clear();
  }
}
