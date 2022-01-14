package com.jobsATM.models;

import javax.persistence.*;
import java.time.LocalDate;

public class Employee {
    @Id
    @SequenceGenerator(
            name = "employee_sequence",
            sequenceName = "employee_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_sequence"
    )

    private Long id;
    private String fullName;
    private String age;
    private Integer yearsOfExperience;
    private String location;
    private String company;
    private String specialization;
}
