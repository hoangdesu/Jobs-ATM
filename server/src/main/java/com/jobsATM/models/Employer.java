package com.jobsATM.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

public class Employer {
    @Id
    @SequenceGenerator(
            name = "employer_sequence",
            sequenceName = "employer_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employer_sequence"
    )

    private Long id;
    private String fullName;
    private String age;
    private String location;
    private String company;
    private String specialization;
}
