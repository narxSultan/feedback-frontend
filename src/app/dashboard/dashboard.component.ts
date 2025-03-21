import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  constructor(private router: Router) {}

  logout() {
    // Remove user session (example: clear localStorage)
    localStorage.removeItem('user');

    // Redirect to login page
    this.router.navigate(['/login']);

}
}
