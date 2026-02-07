package com.HMS.HospitalManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HMS.HospitalManagementSystem.entity.Doctor;
import com.HMS.HospitalManagementSystem.repository.DoctorRepository;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor addDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public void deleteDoctor(Long id) {
        doctorRepository.deleteById(id);
    }
    public Doctor updateDoctor(Long id, Doctor updatedDoctor) {
        Doctor doctor = doctorRepository.findById(id).orElse(null);

        if (doctor != null) {
            doctor.setName(updatedDoctor.getName());
            doctor.setSpecialization(updatedDoctor.getSpecialization());
            doctor.setContact(updatedDoctor.getContact());
            doctor.setEmail(updatedDoctor.getEmail());

            return doctorRepository.save(doctor);
        }

        return null;
    }

}
