package com.service360.group50.service;

import com.service360.group50.entity.Users;
import com.service360.group50.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<Users> getAllUsers ( String role ) {
        return userRepository.findByRole ( role );
    }

    public Users getUserById ( Long userId ) {
        return userRepository.findById(userId).get();
    }

}
