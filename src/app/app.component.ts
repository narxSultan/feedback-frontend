import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'feedback-frontend';
  isAdminView = false;

  toggleView() {
    this.isAdminView = !this.isAdminView;
  }
}
