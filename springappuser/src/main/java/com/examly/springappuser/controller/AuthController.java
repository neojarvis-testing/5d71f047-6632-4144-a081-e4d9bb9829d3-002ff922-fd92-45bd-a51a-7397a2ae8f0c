package com.examly.springappuser.controller;


import com.examly.springappuser.config.JwtUtils;
import com.examly.springappuser.config.UserPrinciple;
import com.examly.springappuser.model.LoginDTO;
import com.examly.springappuser.model.User;
import com.examly.springappuser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createUser(user));
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginDTO loginDto) {
        User user = userService.loginUser(loginDto);
        UserPrinciple userPrinciple = new UserPrinciple(user);
        String token = jwtUtils.generateToken(userPrinciple);
        return ResponseEntity.ok(token);
    }
}
