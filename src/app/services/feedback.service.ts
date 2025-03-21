import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback.model';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:5001/api/feedback'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  // Fetch all feedback from the database
  getFeedbacks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Delete a feedback entry by ID
  deleteFeedback(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Reply to feedback via email
  replyFeedback(email: string, message: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reply`, { email, message });
  }

  // Assign feedback through SMS
  assignFeedback(phone: string, message: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/assign`, { phone, message });
  }

  submitFeedback(feedback: Feedback): Observable<any> {
    return this.http.post<any>(this.apiUrl, feedback);
  }
}
