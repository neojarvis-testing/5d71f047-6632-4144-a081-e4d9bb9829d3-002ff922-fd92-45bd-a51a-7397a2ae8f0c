package com.examly.springappuser.service;


import com.examly.springappuser.model.LoginDTO;
import com.examly.springappuser.model.User;
import com.examly.springappuser.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.examly.springappuser.util.Role;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public User createUser(User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));

        if (user.getEmail().contains("admin")) {
            user.setUserRole(Role.ADMIN);
        } else {
            user.setUserRole(Role.USER);
        }

        return userRepo.save(user);
    }

    @Override
    public User loginUser(LoginDTO loginDto) {
        return userRepo.findByEmail(loginDto.getEmail())
                .filter(user -> new BCryptPasswordEncoder().matches(loginDto.getPassword(), user.getPassword()))
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
