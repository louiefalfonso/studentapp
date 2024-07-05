package com.studentapp.studentapp.controller;

import com.studentapp.studentapp.dto.StudentDto;
import com.studentapp.studentapp.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/students")
public class StudentController {

    private StudentService studentService;

    // POST Student Rest API
    @PostMapping
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto){
        StudentDto savedStudent = studentService.createStudent(studentDto);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    //GET Student Rest API
    @GetMapping("{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long studentId){
        StudentDto studentDto = studentService.getStudentById(studentId);
        return  ResponseEntity.ok(studentDto);
    }

    //Get All Students Rest API
    @GetMapping
    public  ResponseEntity<List<StudentDto>> getAllStudents(){
        List<StudentDto> student = studentService.getAllStudents();
        return ResponseEntity.ok(student);
    }

    //Update Student Rest API
    @PutMapping("{id}")
    public ResponseEntity<StudentDto> updateStudent(@PathVariable("id") Long studentId,
                                                    @RequestBody StudentDto updatedStudent){
        StudentDto studentDto = studentService.updateStudent(studentId, updatedStudent);
        return ResponseEntity.ok(studentDto);

    }

    //Delete Student Rest API
    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId){
        studentService.deleteStudent(studentId);
        return ResponseEntity.ok("Student Deleted Successfully");
    }


}
