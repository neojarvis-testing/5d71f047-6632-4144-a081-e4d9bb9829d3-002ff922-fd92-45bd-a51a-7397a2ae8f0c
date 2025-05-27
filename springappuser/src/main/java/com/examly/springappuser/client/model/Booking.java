package com.examly.springappuser.client.model;

import lombok.Data;
import org.springframework.security.core.userdetails.User;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
public class Booking {
    private int bookingId;

    private LocalDate bookingForDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private LocalDateTime bookingCreatedAt;
    private String status;
    private User user;
    private Turf turf;
}
