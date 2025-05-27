package com.examly.springappfeedback.model;

import jakarta.persistence.*;
import org.springframework.security.core.userdetails.User;

@Entity
public class Turf {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int turfId;

    private String name;
    private String location;
    private double pricePerHour;
    private String description;
    private boolean isActive;
    private String photo;

    @ManyToOne
    @JoinColumn(name="user_Id")
    private User user;
}