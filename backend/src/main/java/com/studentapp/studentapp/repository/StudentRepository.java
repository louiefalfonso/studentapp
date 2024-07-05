package com.studentapp.studentapp.repository;

import com.studentapp.studentapp.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student,Long> {
    Optional<Student> findAllById(Long studentId);
}
