package com.examly.springappturf.controller;

import com.examly.springappturf.model.Booking;
import com.examly.springappturf.model.BookingStatus;
import com.examly.springappturf.service.BookingService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class BookingControllerTest {
    @Mock
    private BookingService bookingService;

    @InjectMocks
    private BookingController bookingController;

    @Test
    public void testAddBooking() {
        Booking booking = new Booking();
        booking.setBookingId(1);

        when(bookingService.addBooking(any(Booking.class))).thenReturn(booking);

        ResponseEntity<Booking> response = bookingController.addBooking(booking);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
    }

    @Test
    public void testGetBookingById() {
        Booking booking = new Booking();
        booking.setBookingId(1);

        when(bookingService.getBookingById(1)).thenReturn(booking);

        ResponseEntity<Booking> response = bookingController.getBookingById(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals(1, response.getBody().getBookingId());
    }

    @Test
    public void testApproveBooking() {
        when(bookingService.approveBooking(1)).thenReturn("Booking approved!");

        ResponseEntity<String> response = bookingController.approveBooking(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Booking approved!", response.getBody());
    }
}