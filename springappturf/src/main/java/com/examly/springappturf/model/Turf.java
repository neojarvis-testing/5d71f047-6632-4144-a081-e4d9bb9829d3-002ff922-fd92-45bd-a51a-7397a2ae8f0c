package com.examly.springappturf.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.security.core.userdetails.User;

@Data
@AllArgsConstructor
@NoArgsConstructor
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
    private String turfType;
}
