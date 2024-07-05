package com.studentapp.studentapp.service.impl;

import com.studentapp.studentapp.dto.StudentDto;
import com.studentapp.studentapp.entity.Student;
import com.studentapp.studentapp.exception.ResourceNotFoundException;
import com.studentapp.studentapp.mapper.StudentMapper;
import com.studentapp.studentapp.repository.StudentRepository;
import com.studentapp.studentapp.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    // REST API - Create Students
    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent = studentRepository.save(student);
        return  StudentMapper.mapToStudentDto(savedStudent);
    }

    // REST API - Get Students By Id
    @Override
    public StudentDto getStudentById(Long studentId) {
        Student student = studentRepository.findAllById(studentId)
                .orElseThrow(() ->
                new ResourceNotFoundException("Student is not exist with a given Id:" + studentId));
        return StudentMapper.mapToStudentDto(student);

    }

    // REST API - Get All Students
    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return students.stream().map((StudentMapper::mapToStudentDto))
                .collect(Collectors.toList());
    }

    // REST API - Update Student
    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updatedStudent) {
        Student student = studentRepository.findAllById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student is not exist with given id:" +studentId)
        );

        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setEmail(updatedStudent.getEmail());
        student.setPercentage(updatedStudent.getPercentage());
        student.setCollege(updatedStudent.getCollege());
        student.setActiveStudent(updatedStudent.getActiveStudent());
        Student updatedStudentObj = studentRepository.save(student);

        return StudentMapper.mapToStudentDto(updatedStudentObj);
    }

    // REST API - Delete Student
    @Override
    public void deleteStudent(Long studentId) {
        Student student = studentRepository.findAllById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student doesn't exist with given id:" + studentId)
        );
        studentRepository.deleteById(studentId);
    }

}


