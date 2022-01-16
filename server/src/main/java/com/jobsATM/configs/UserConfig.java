package com.jobsATM.configs;

import com.jobsATM.models.User;
import com.jobsATM.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {
//    @Bean
//    CommandLineRunner userCommandLineRunner(UserRepository userRepository) {
//
//        // populate database
//        List<User> sampleJobs = List.of(
//            new User(1L, "admin", "Ho Chi Minh city", "Jobs ATM company", "Fullstack developer", "admin"),
//                new User(1L, "admin", "Ho Chi Minh city", "Jobs ATM company", "Fullstack developer", "admin"),
//                new User(2L, "Hoang Nguyen", "Ho Chi Minh city", "National Bank Australia", "React developer", "employee"),
//                new User(3L, "Student recruiter", "Hanoi", "RMIT University", "Human resource", "employer"),
//                new User(4L, "Nguyen Tan Huy", "Danang", "Pro League", "IT manager", "employee"),
//                new User(2L, "Netto Pro", "Nghe An", "Netcompanry", "Tourism", "employee"),
//                new User(5L, "Somebody", "Hue", "Some company in Hue idk", "Digital design", "employer")
//        );
//        return args -> {
//            userRepository.saveAll(sampleJobs);
//        };
//    }
}
