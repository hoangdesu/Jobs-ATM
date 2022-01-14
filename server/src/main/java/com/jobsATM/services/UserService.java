//package com.jobsATM.services;
//
//import com.jobsATM.models.User;
//import com.jobsATM.repositories.UserDAO;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class UserService {
//    private final UserDAO userDAO;
//
//    @Autowired
//    public UserService(UserDAO userDAO) {
//        this.userDAO = userDAO;
//    }
//
//    public List<User> getAllUsers() {
//        return userDAO.findAll();
//    }
//}
