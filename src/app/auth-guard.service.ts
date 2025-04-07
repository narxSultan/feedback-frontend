import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    if (token.split('.').length !== 3) {
      console.error("Invalid token format");
      this.router.navigate(['/login']);
      return false;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log("Decoded Token:", decodedToken);

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
    return typeof localStorage !== 'undefined' && !!localStorage.getItem('token');
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
