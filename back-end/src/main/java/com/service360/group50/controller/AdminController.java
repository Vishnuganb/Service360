package com.service360.group50.controller;

import com.service360.group50.entity.Role;
import com.service360.group50.entity.Users;
import com.service360.group50.service.CustomerService;
import com.service360.group50.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.service360.group50.entity.Role.CUSTOMER;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class AdminController {

    private final CustomerService customerService;
    private final UserService userService;

    public List<Users> getAllCustomers() {
        String targetRole = "CUSTOMER";
        return userService.getAllUsers(targetRole);
    }

    public List<Users> getAllAdvertisers() {
        String targetRole = "ADVERTISER";
        return userService.getAllUsers(targetRole);
    }

    public List<Users> getAllServiceProviders() {
        String targetRole = "SERVICEPROVIDER";
        return userService.getAllUsers(targetRole);
    }


}
