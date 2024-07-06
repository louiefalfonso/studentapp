package com.studentapp.studentapp;

import com.studentapp.studentapp.entity.Student;
import com.studentapp.studentapp.repository.StudentRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class StudentRepositoryTest {

    @Autowired
    private StudentRepository studentRepository;

    //JUnit Test for Save Student
    @Test
    public void saveStudentTest(){
        Student student = Student.builder()
                .firstName("Stephen")
                .lastName("Hawking")
                .email("hawkings@gmail.com")
                .college("Engineering")
                .percentage(93.10F)
                .activeStudent(false)
                .build();
        studentRepository.save(student);
        Assertions.assertThat(student.getId()).isGreaterThan(0);
    }

    //JUnit Test for Get Student
    @Test
    public void getStudentTest(){
        Student student = studentRepository.findAllById(1L).get();
        Assertions.assertThat(student.getId()).isEqualTo(1L);
    }


    //JUnit Test for Get All Student
    @Test
    public void getListOfStudentsTest(){
        List<Student> students = studentRepository.findAll();
        Assertions.assertThat(students.size()).isGreaterThan(0);
    }

    public void updateStudentTest(){

    }



    /*

    */
}
