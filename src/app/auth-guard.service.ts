import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    // Check if the token is properly formatted
    if (token.split('.').length !== 3) {
      console.error("Invalid token format");
      this.router.navigate(['/login']);
      return false;
    }

    try {
      // Decode the JWT token (base64)
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT token
      console.log("Decoded Token:", decodedToken);  // <-- Log the decoded token

      // Check if the role is 'admin'
      if (decodedToken.role !== 'admin') {
        this.router.navigate(['/dashboard']);
        return false;
      }

    } catch (error) {
      console.error("Error decoding token:", error);
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
  isLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token'); // Adjust this to your actual auth logic
    }
    return false; // Return false if localStorage is unavailable
  }
}
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
}

@Injectable({
  providedIn: 'root'
})
export class PlatformAuthGuardService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }
}
