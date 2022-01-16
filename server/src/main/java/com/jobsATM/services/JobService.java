package com.jobsATM.services;

import com.jobsATM.models.Job;
import com.jobsATM.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
//    Iterable<Job> findAll();
//    List<Job> search(String query);
//    Job findOne(Long id);
//    void save(Job job);
////    void delete(Long id);

    private final JobRepository jobRepository;

    @Autowired
    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<Job> getAllJobs() {
//        return List.of(
//                new Job(1L, "React developer", "Best salary in town. Apply now!");
//        )
        return jobRepository.findAll();

    }

}
