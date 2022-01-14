package com.jobsATM.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

public class User {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )

    private Long id;
    private String fullName;
    private String age;
    private String location;
    private String company;
    private String specialization;
    private String role;

    public User() {
    }

    public User(Long id, String fullName, String age, String location, String company, String specialization, String role) {
        this.id = id;
        this.fullName = fullName;
        this.age = age;
        this.location = location;
        this.company = company;
        this.specialization = specialization;
        this.role = role;
    }
}

