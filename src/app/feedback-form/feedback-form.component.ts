import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/feedback.model';

@Component({
  selector: 'app-feedback-form',
  standalone: false, // Removed standalone property
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'], // Fixed property name
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      const feedback: Feedback = this.feedbackForm.value;

      this.feedbackService.submitFeedback(feedback).subscribe({
        next: () => {
          alert('Feedback submitted successfully!');
          this.feedbackForm.reset();
        },
        error: (err) => {
          console.error('Error submitting feedback:', err);
          alert('Failed to submit feedback. Try again.');
        },
      });
    }
  }
}
