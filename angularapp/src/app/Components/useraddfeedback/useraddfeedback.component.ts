import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-useraddfeedback',
  templateUrl: './useraddfeedback.component.html',
  styleUrls: ['./useraddfeedback.component.css']
})
export class UserAddFeedbackComponent {
  feedback: Feedback = {
    userId: Number(localStorage.getItem('userId')),
    feedbackText: '',
    date: new Date().toISOString().split('T')[0],
    turfId: 0, // Optional: set based on selection
    rating: 0  // Optional: set if needed
  };

  submitted = false;
  showModal = false;

  constructor(private feedbackService: FeedbackService) {}

  onSubmit() {
    this.submitted = true;
    if (!this.feedback.feedbackText) {
      return;
    }

    this.feedbackService.sendFeedback(this.feedback).subscribe({
      next: () => {
        this.showModal = true;
        this.submitted = false;
        this.feedback.feedbackText = '';
      },
      error: (err) => {
        console.error('Error submitting feedback', err);
      }
    });
  }

  closeModal() {
    this.showModal = false;
  }
}
