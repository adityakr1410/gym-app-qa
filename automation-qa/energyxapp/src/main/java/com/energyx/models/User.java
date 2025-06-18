package com.energyx.models;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class User {
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private String target;
    private String preferableActivity;
    private String title;
    private String about;
    private String specialization;
    private List<String> certificates;



}
