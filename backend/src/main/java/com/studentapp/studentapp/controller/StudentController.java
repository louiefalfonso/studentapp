package com.studentapp.studentapp.controller;

import com.studentapp.studentapp.dto.StudentDto;
import com.studentapp.studentapp.entity.Student;
import com.studentapp.studentapp.repository.StudentRepository;
import com.studentapp.studentapp.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private  StudentRepository studentRepository;

    // POST Student Rest API
    @PostMapping
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto){
        StudentDto savedStudent = studentService.createStudent(studentDto);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    //GET Student By ID Rest API
    @GetMapping("{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable("id") long id){
        Student student = studentRepository.findAllById(id)
                .orElseThrow(()-> new RuntimeException("Student not exist with id:" + id));
        return  ResponseEntity.ok(student);
    }


    //Get All Students Rest API
    @GetMapping
    public  ResponseEntity<List<StudentDto>> getAllStudents(){
        List<StudentDto> student = studentService.getAllStudents();
        return ResponseEntity.ok(student);
    }

    //Update Student Rest API
    @PutMapping("{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable ("id") long id,
                                                 @RequestBody Student studentDetails){
        Student updateStudent = studentRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Student not exist with id: " + id));

        updateStudent.setFirstName(studentDetails.getFirstName());
        updateStudent.setLastName(studentDetails.getLastName());
        updateStudent.setEmail(studentDetails.getEmail());
        updateStudent.setCollege(studentDetails.getCollege());
        updateStudent.setPercentage(studentDetails.getPercentage());
        updateStudent.setActiveStudent(studentDetails.getActiveStudent());
        studentRepository.save(updateStudent);

      return ResponseEntity.ok(updateStudent);

    }


    //Delete Student Rest API
    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId){
        studentService.deleteStudent(studentId);
        return ResponseEntity.ok("Student Deleted Successfully");
    }


}
