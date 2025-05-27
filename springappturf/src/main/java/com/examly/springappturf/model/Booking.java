package com.examly.springappturf.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.userdetails.User;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;

    private LocalDate bookingForDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private LocalDateTime bookingCreatedAt;
    private BookingStatus status;
    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    @ManyToOne
    @JoinColumn(name="turfId")
    private Turf turf;
}