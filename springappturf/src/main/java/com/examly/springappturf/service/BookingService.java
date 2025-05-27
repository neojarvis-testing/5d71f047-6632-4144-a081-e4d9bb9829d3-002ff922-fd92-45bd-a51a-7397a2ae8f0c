package com.examly.springappturf.service;

import com.examly.springappturf.model.Booking;
import java.util.List;

public interface BookingService {
    Booking addBooking(Booking booking);
    List<Booking> getAllBookings();
    Booking getBookingById(int id);
    Booking updateBooking(int id, Booking bookingDetails);
    void deleteBooking(int id);
    List<Booking> getBookingsByUserId(int userId);
    List<Booking> getBookingsByTurfId(int turfId);
    String approveBooking(int id);
    String cancelBooking(int id);
}