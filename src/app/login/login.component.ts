import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: { token: string }) => {
        localStorage.setItem('token', response.token);  // Save token in localStorage
        this.router.navigate(['/dashboard']); // Navigate to Dashboard after successful login
      },
      error: (error: any) => {
        this.errorMessage = 'Invalid credentials!';  // Show error message if credentials are incorrect
        console.error(error);
      }
    });
  }
}
