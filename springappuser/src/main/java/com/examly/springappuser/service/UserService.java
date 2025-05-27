package com.examly.springappuser.service;

import com.examly.springappuser.model.LoginDTO;
import com.examly.springappuser.model.User;

import java.util.List;


public interface UserService {
    User createUser(User user);
    User loginUser(LoginDTO loginDto);
    List<User> getAllUsers();
}
