package com.examly.springappuser.client.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.userdetails.User;

@Data
public class Turf {
    private int turfId;

    private String name;
    private String location;
    private double pricePerHour;
    private String description;
    private boolean isActive;
    private String photo;
    private User user;
}