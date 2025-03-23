import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
/*export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Simple validation (You can replace this with real authentication)
      if (username === 'admin' && password === 'password') {
        alert('Login Successful!');
        this.router.navigate(['/admin-dashboard']); // Redirect to admin dashboard
      } else {
        alert('Invalid credentials. Try again.');
      }
    }
  }
}
*/
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: { token: string }) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']); // Redirect to Dashboard
      },
      error: (error: any) => {
        this.errorMessage = 'Invalid credentials!';
        console.error(error);
      }
    });
  }
}
