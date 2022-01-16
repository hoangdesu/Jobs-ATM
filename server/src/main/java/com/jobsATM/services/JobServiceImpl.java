//package com.jobsATM.services;
//
//import com.jobsATM.models.Job;
//import com.jobsATM.repositories.JobRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.util.List;
//
//public class JobServiceImpl implements JobService {
//    @Autowired
//    private JobRepository jobRepository;
//
//    @Override
//    public Iterable<Job> findAll() {
//        return jobRepository.findAll();
//    }
//
//    @Override
//    public List<Job> search(String query) {
//        return jobRepository.findByNameContaining(query);
//    }
//
//    @Override
//    public Job findOne(Long id) {
//        return jobRepository.findOne(id);
//    }
//
//    @Override
//    public void save(Job job) {
//        jobRepository.save(job);
//    }
//
////    @Override
////    public void delete(Long id) {
////        jobRepository.delete(id);
////    }
//}
