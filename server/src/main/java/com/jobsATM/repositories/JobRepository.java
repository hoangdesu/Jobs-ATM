package com.jobsATM.repositories;

import com.jobsATM.models.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
//    List<Job> findByNameContaining(String query);
//    Job findOne(Long id);

//    void delete(Long id);
}
