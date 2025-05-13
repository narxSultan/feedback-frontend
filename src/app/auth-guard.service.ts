import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

/*@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    const token = localStorage.getItem('token');

    // If token is missing, allow access to the dashboard
    if (!token) {
      const currentUrl = this.router.url;
      if (currentUrl === '/dashboard') {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }

    // Check for valid token format
    if (token.split('.').length !== 3) {
      console.error('Invalid token format');
      this.router.navigate(['/login']);
      return false;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      if (decodedToken.role !== 'user') {
        this.router.navigate(['/dashboard']);
        return false;
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  isLoggedIn(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    return !!localStorage.getItem('token');
  }
}*/


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(): boolean {
    // If running in the browser, always allow access
    if (isPlatformBrowser(this.platformId)) {
      return true;
    }

    // On server side, you may choose to block or allow
    return false; // or `true` depending on SSR behavior
  }

  isLoggedIn(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    return !!localStorage.getItem('token'); // still available for optional use
  }
}
