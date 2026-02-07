package com.HMS.HospitalManagementSystem;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordGenerator {

    public static void main(String[] args) {

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String adminHash = encoder.encode("admin123");
        String doctorHash = encoder.encode("doctor123");

        System.out.println("Admin hash: " + adminHash);
        System.out.println("Doctor hash: " + doctorHash);
    }
}
