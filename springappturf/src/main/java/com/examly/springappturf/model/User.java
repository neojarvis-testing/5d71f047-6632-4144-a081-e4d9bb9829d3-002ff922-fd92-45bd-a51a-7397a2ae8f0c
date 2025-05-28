package com.examly.springappturf.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String email;

    private String password;
    private String username;
    private String mobileNumber;

    @Enumerated(EnumType.STRING)
    private Role userRole;
}
