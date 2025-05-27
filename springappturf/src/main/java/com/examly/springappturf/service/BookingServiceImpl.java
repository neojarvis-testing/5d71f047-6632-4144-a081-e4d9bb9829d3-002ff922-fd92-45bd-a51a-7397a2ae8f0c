package com.examly.springappturf.service;

import com.examly.springappturf.model.Booking;
import com.examly.springappturf.model.BookingStatus;
import com.examly.springappturf.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class BookingServiceImpl implements BookingService {
    @Autowired
    private BookingRepository bookingRepo;

    @Override
    public Booking addBooking(Booking booking) {
        booking.setBookingCreatedAt(LocalDateTime.now());
        booking.setStatus(BookingStatus.PENDING);
        return bookingRepo.save(booking);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepo.findAll();
    }

    @Override
    public Booking getBookingById(int id) {
        return bookingRepo.findById((long) id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
    }

    @Override
    public Booking updateBooking(int id, Booking bookingDetails) {
        Booking booking = getBookingById(id);
        booking.setBookingForDate(bookingDetails.getBookingForDate());
        booking.setStartTime(bookingDetails.getStartTime());
        booking.setEndTime(bookingDetails.getEndTime());
        return bookingRepo.save(booking);
    }

    @Override
    public void deleteBooking(int id) {
        bookingRepo.deleteById((long) id);
    }

    @Override
    public List<Booking> getBookingsByUserId(int userId) {
        return bookingRepo.findByUserUserId(userId);
    }

    @Override
    public List<Booking> getBookingsByTurfId(int turfId) {
        return bookingRepo.findByTurfTurfId(turfId);
    }

    @Override
    public String approveBooking(int id) {
        Booking booking = getBookingById(id);
        booking.setStatus(BookingStatus.APPROVED);
        bookingRepo.save(booking);
        return "Booking approved!";
    }

    @Override
    public String cancelBooking(int id) {
        Booking booking = getBookingById(id);
        booking.setStatus(BookingStatus.REJECTED);
        bookingRepo.save(booking);
        return "Booking canceled!";
    }
}