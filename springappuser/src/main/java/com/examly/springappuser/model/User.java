package com.examly.springappuser.model;

import jakarta.persistence.*;
import lombok.Data;
import com.examly.springappuser.util.Role;


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
