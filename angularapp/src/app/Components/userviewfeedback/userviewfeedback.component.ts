import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-userviewfeedback',
  templateUrl: './userviewfeedback.component.html',
  styleUrls: ['./userviewfeedback.component.css']
})
export class UserviewfeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [];
  selectedFeedbackId: number | null = null;
  userId: number = Number(localStorage.getItem('userId'));

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(): void {
    this.feedbackService.getAllFeedbacksByUserId(this.userId).subscribe({
      next: (data) => this.feedbacks = data,
      error: () => this.feedbacks = []
    });
  }

  confirmDelete(id: number): void {
    this.selectedFeedbackId = id;
  }

  deleteFeedback(): void {
    if (this.selectedFeedbackId !== null) {
      this.feedbackService.deleteFeedback(this.selectedFeedbackId).subscribe(() => {
        this.loadFeedbacks();
        this.selectedFeedbackId = null;
      });
    }
  }

  cancelDelete(): void {
    this.selectedFeedbackId = null;
  }
}
