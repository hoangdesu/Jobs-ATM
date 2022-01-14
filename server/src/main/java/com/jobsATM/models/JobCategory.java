package com.jobsATM.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

public class JobCategory {
    @Id
    @SequenceGenerator(
            name = "job_category_sequence",
            sequenceName = "job_category_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "job_category_sequence"
    )

    private Long id;
    private String title ;
}
