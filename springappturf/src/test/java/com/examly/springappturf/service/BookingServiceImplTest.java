package com.examly.springappturf.service;

import com.examly.springappturf.model.Booking;
import com.examly.springappturf.model.BookingStatus;
import com.examly.springappturf.repository.BookingRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class BookingServiceImplTest {
    @Mock
    private BookingRepository bookingRepo;

    @InjectMocks
    private BookingServiceImpl bookingService;

    @Test
    public void testAddBooking() {
        Booking booking = new Booking();
        booking.setBookingId(1);
        booking.setBookingForDate(LocalDate.now());
        booking.setStatus(BookingStatus.PENDING);

        when(bookingRepo.save(any(Booking.class))).thenReturn(booking);

        Booking savedBooking = bookingService.addBooking(booking);
        assertNotNull(savedBooking);
        assertEquals(BookingStatus.PENDING, savedBooking.getStatus());
    }

    @Test
    public void testGetBookingById() {
        Booking booking = new Booking();
        booking.setBookingId(1);

        when(bookingRepo.findById(1L)).thenReturn(Optional.of(booking));

        Booking retrievedBooking = bookingService.getBookingById(1);
        assertNotNull(retrievedBooking);
        assertEquals(1, retrievedBooking.getBookingId());
    }

    @Test
    public void testApproveBooking() {
        Booking booking = new Booking();
        booking.setBookingId(1);
        booking.setStatus(BookingStatus.PENDING);

        when(bookingRepo.findById(1L)).thenReturn(Optional.of(booking));

        String result = bookingService.approveBooking(1);
        assertEquals("Booking approved!", result);
        assertEquals(BookingStatus.APPROVED, booking.getStatus());
    }
}