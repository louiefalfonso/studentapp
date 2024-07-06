package com.studentapp.studentapp.mapper;

import com.studentapp.studentapp.dto.StudentDto;
import com.studentapp.studentapp.entity.Student;

public class StudentMapper {

    // Convert Student JPA Entity to DTO
    public static StudentDto mapToStudentDto(Student student){
        return new StudentDto(
                student.getId(),
                student.getFirstName(),
                student.getLastName(),
                student.getEmail(),
                student.getPercentage(),
                student.getCollege(),
                student.getActiveStudent()
        );
    }
    // Convert Student DTO to JPA Entity
    public static Student mapToStudent(StudentDto studentDto){
        return new Student(
              studentDto.getId(),
              studentDto.getFirstName() ,
              studentDto.getLastName() ,
              studentDto.getEmail(),
              studentDto.getPercentage(),
              studentDto.getCollege(),
              studentDto.getActiveStudent()
        );
    }
}
