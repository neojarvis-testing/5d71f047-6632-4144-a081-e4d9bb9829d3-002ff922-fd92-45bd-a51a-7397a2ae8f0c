import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-userviewbooking',
  templateUrl: './userviewbooking.component.html',
  styleUrls: ['./userviewbooking.component.css']
})
export class UserviewbookingComponent implements OnInit {
  bookings: any[] = [];
  selectedBookingId: number | null = null;
  showConfirmModal = false;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    const userId = Number(localStorage.getItem('userId'));
    this.bookingService.getAllBookingsByUserId(userId).subscribe({
      next: (res) => {
        this.bookings = res;
      },
      error: (err) => {
        console.error('Error fetching bookings', err);
      }
    });
  }

  confirmDelete(bookingId: number) {
    this.selectedBookingId = bookingId;
    this.showConfirmModal = true;
  }

  deleteBooking() {
    if (this.selectedBookingId !== null) {
      this.bookingService.deleteBooking(this.selectedBookingId).subscribe({
        next: () => {
          this.bookings = this.bookings.filter(b => b.bookingId !== this.selectedBookingId);
          this.selectedBookingId = null;
          this.showConfirmModal = false;
        },
        error: (err) => {
          console.error('Error deleting booking', err);
        }
      });
    }
  }

  cancelDelete() {
    this.showConfirmModal = false;
    this.selectedBookingId = null;
  }
}
