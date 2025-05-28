import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-adminviewbooking',
  templateUrl: './adminviewbooking.component.html',
  styleUrls: ['./adminviewbooking.component.css']
})
export class AdminviewbookingComponent implements OnInit {
  bookings: Booking[] = [];
  selectedBooking: Booking | null = null;
  showModal: boolean = false;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getAllBookings().subscribe(data => {
      this.bookings = data;
    });
  }

  changeStatus(booking: Booking, newStatus: string): void {
    booking.status = newStatus;
    this.bookingService.updateBooking(booking.bookingId!, booking).subscribe(() => {
      this.loadBookings();
    });
  }

  openModal(booking: Booking): void {
    this.selectedBooking = booking;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedBooking = null;
  }
}
