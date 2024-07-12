package com.studentapp.studentapp.service.impl;

import com.studentapp.studentapp.dto.StudentDto;
import com.studentapp.studentapp.entity.Student;
import com.studentapp.studentapp.exception.ResourceNotFoundException;
import com.studentapp.studentapp.mapper.StudentMapper;
import com.studentapp.studentapp.repository.StudentRepository;
import com.studentapp.studentapp.service.StudentService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;
    private ModelMapper modelMapper;

    // REST API - Create Students
    @Override
    public StudentDto createStudent(StudentDto studentDto) {

        //Student student = StudentMapper.mapToStudent(studentDto);

        Student student = modelMapper.map(studentDto, Student.class);

        Student savedStudent = studentRepository.save(student);

       StudentDto savedStudentDto = modelMapper.map(savedStudent, StudentDto.class);

        return savedStudentDto;
    }

    // REST API - Get Students By Id
    @Override
    public StudentDto getStudentById(Long studentId) {
        Student student = studentRepository.findAllById(studentId)
                .orElseThrow(() ->
                new ResourceNotFoundException("Student is not exist with a given Id:" + studentId));
        //return StudentMapper.mapToStudentDto(student);
        return modelMapper.map(student, StudentDto.class);

    }

    // REST API - Get All Students
    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        // return students.stream().map((StudentMapper::mapToStudentDto))
        //        .collect(Collectors.toList());

        return students.stream().map((student) -> modelMapper.map(student, StudentDto.class))
                .collect(Collectors.toList());
    }

    // REST API - Update Student
    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updateStudent) {
        Student student = studentRepository.findAllById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student is not exist with given id:" +studentId)
        );

        student.setFirstName(updateStudent.getFirstName());
        student.setLastName(updateStudent.getLastName());
        student.setEmail(updateStudent.getEmail());
        student.setPercentage(updateStudent.getPercentage());
        student.setCollege(updateStudent.getCollege());
        student.setActiveStudent(updateStudent.getActiveStudent());
        Student updateStudentObj = studentRepository.save(student);

        //return StudentMapper.mapToStudentDto(updateStudentObj);
        return modelMapper.map(updateStudentObj, StudentDto.class);
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


