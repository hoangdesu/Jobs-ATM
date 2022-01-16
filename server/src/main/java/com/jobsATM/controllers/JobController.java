package com.jobsATM.controllers;


import com.jobsATM.models.Job;
import com.jobsATM.models.User;
import com.jobsATM.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("v1/api/jobs")
public class JobController {

    private final JobService jobService;

    @Autowired
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }


    @GetMapping("")
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
//        return Arrays.asList(new Job("Frontend developer", "Best salary in town!"));
    }

    @GetMapping("/search")
    public String hi() {
        return "Hi jobs";
    }
}
