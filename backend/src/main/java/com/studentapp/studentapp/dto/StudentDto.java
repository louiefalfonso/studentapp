package com.studentapp.studentapp.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {
    private Long id;
    private String firstName;
    private String  lastName;
    private String email;
    private float percentage;
    private String college;
    private Boolean activeStudent;
}
