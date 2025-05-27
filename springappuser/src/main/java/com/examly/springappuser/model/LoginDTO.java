package com.examly.springappuser.model;

import lombok.Data;

@Data
public class LoginDTO {
    private String email;
    private String password;
}