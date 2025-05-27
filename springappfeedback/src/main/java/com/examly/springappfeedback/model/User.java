package com.examly.springappfeedback.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    // Additional fields for future expansion
    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;
}