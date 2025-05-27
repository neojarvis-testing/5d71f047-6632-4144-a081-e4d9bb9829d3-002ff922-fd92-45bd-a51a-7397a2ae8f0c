import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
  }

  bookTurf(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/api/booking`, booking, { headers: this.getAuthHeaders() });
  }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/api/booking`, { headers: this.getAuthHeaders() });
  }

  getBookingById(bookingId: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/api/booking/${bookingId}`, { headers: this.getAuthHeaders() });
  }

  getAllBookingsByUserId(userId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/api/booking/user/${userId}`, { headers: this.getAuthHeaders() });
  }

  updateBooking(bookingId: number, booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(`${this.apiUrl}/api/booking/${bookingId}`, booking, { headers: this.getAuthHeaders() });
  }

  deleteBooking(bookingId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/booking/${bookingId}`, { headers: this.getAuthHeaders() });
  }
}
