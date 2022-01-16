package com.jobsATM.services;

import com.jobsATM.models.User;
import com.jobsATM.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
//        return List.of(
//                new Job(1L, "React developer", "Best salary in town. Apply now!");
//        )
        return userRepository.findAll();

    }
}
