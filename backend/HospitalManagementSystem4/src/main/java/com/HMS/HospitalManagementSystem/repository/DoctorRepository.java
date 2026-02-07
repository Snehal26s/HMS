package com.HMS.HospitalManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.HMS.HospitalManagementSystem.entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}

