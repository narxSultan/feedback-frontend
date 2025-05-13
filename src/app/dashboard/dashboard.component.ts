import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isDropdownOpen = false;
  feedbacks: any[] = [];
  currentPage: number = 1;  // Track current page
  itemsPerPage: number = 10; // Set page size to 10
  user: any;


  onPageChange(event: number): void {
    this.currentPage = event;
  }

  constructor(private router: Router, private feedbackService: FeedbackService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadFeedbacks();
    this.loadFeedbackStats(); // Correctly defined above
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    // Remove user session (example: clear localStorage)
    localStorage.removeItem('user');

    // Redirect to login page
    this.router.navigate(['/login']);
  }

  loadFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe((data) => {
      this.feedbacks = data;
    });
  }

  deleteFeedback(id: number) {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackService.deleteFeedback(id).subscribe(() => {
        this.loadFeedbacks();
      });
    }
  }

  replyFeedback(email: string) {
    const message = prompt('Enter your reply message:');
    if (message) {
      this.feedbackService.replyFeedback(email, message).subscribe(() => {
        alert('Reply sent successfully!');
      });
    }
  }

  assignFeedback(phone: string) {
    const message = prompt('Enter the assignment message:');
    if (message) {
      this.feedbackService.assignFeedback(phone, message).subscribe(() => {
        alert('Assignment sent via SMS!');
      });
    }
  }
  totalFeedback: number = 0;
  repliedFeedback: number = 0;
  latestFeedback: any = null;
  loadFeedbackStats() {
    this.feedbackService.getFeedbacks().subscribe((data: any) => {
      if (data) {
        this.totalFeedback = data.totalFeedback || 0;
        this.repliedFeedback = data.repliedFeedback || 0;
        this.latestFeedback = data.latestFeedback || null;
      }

      this.authService.getDashboardData().subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (error) => {
          console.error('Error fetching dashboard data', error);
        }

    });
  }
)}
}
