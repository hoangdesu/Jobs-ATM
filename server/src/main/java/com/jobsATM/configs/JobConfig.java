package com.jobsATM.configs;

import com.jobsATM.models.Job;
import com.jobsATM.repositories.JobRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class JobConfig {
    @Bean
    CommandLineRunner commandLineRunner(JobRepository jobRepository) {

        // populate database
        List<Job> sampleJobs = List.of(
                new Job(1L, "React developer", "Freshers OK too. Best salary in town. Apply now!", "https://wiki.tino.org/wp-content/uploads/2020/10/react-native-final-file.jpg"),
                new Job(2L, "Java Spring Boot developer", "Senior level, 5+ years of experience", "https://huongdanjava.com/wp-content/uploads/2018/03/spring-boot-1.png"),
                new Job(3L, "Business analyst", "Looking for a senior business analyst, good salary", "https://topdev.vn/blog/wp-content/uploads/2018/04/business-analyst-la-gi.png"),
                new Job(4L, "Angular developer", "Good experience working with AngularJS and 2", "https://mona.media/wp-content/uploads/2021/09/angularjs.png"),
                new Job(5L, "Senior accountant", "Looking for an account to work in a Big Four company", "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-983321926.jpg?itok=usJ_HhgI"),
                new Job(6L, "Software tester", "Can test JavaScript and Java using popular frameworks", "https://jobsgo.vn/blog/wp-content/uploads/2021/11/nghe-tester-la-gi-4.jpg")
        );
        return args -> {
            jobRepository.saveAll(sampleJobs);
        };
    }
}
