package com.jobsATM.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

public class Job {
    @Id
    @SequenceGenerator(
            name = "jobs_sequence",
            sequenceName = "job_category_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "job_category_sequence"
    )

    private Long id;
    private String title;
}
