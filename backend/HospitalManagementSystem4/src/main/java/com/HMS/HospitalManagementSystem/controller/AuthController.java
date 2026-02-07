package com.HMS.HospitalManagementSystem.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.HMS.HospitalManagementSystem.config.JwtUtil;
import com.HMS.HospitalManagementSystem.dto.LoginRequest;
import com.HMS.HospitalManagementSystem.dto.LoginResponse;
import com.HMS.HospitalManagementSystem.entity.User;
import com.HMS.HospitalManagementSystem.service.AuthService;
@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        User user = authService.login(request.getUsername(), request.getPassword());

        if (user != null) {
            String token = jwtUtil.generateToken(user.getUsername(), user.getRole());
            return ResponseEntity.ok(new LoginResponse(token, user.getRole()));
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}

