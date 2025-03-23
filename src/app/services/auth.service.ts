import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5001/api/auth'; // Your backend URL

  constructor(private http: HttpClient) {}

  //login(email: string, password: string): Observable<any> {
   // return this.http.post(`${this.apiUrl}/login`, { email, password });
  //}
  login(email: string, password: string) {
    return this.http.post<{ token: string }>('http://localhost:5001/api/auth/login', { email, password });
  }


  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { name, email, password });
  }

  getDashboardData(): Observable<any> {
    return this.http.get('http://localhost:5001/api/users/dashboard');
  }
}
