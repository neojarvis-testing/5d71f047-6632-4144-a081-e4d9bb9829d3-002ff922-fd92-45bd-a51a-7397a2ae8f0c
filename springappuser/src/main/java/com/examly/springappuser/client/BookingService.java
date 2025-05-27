package com.examly.springappuser.client;

import com.examly.springappuser.client.model.Booking;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@FeignClient(name = "turf-service", url = "http://localhost:8080")
public interface BookingService {

    @GetMapping("/bookings")
    List<Booking> getAllBookings();

    @PutMapping("/bookings/approve/{id}")
    String approveBooking(@PathVariable int id);

    @PutMapping("/bookings/cancel/{id}")
    String cancelBooking(@PathVariable int id);

    @DeleteMapping("/{id}")
    void deleteBooking(@PathVariable int id);
}
