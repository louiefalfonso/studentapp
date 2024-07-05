package com.studentapp.studentapp.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name="students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String  lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "percentage_score")
    private float percentage;

    @Column(name = "college")
    private String college;

    @Column(name = "activeStudent")
    private Boolean activeStudent;

}
