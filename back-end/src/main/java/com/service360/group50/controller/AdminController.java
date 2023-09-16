package com.service360.group50.controller;

import com.service360.group50.entity.Role;
import com.service360.group50.entity.Users;
import com.service360.group50.service.CustomerService;
import com.service360.group50.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.service360.group50.entity.Role.CUSTOMER;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class AdminController {

    private final CustomerService customerService;
    private final UserService userService;

    @GetMapping("/getAllCustomers")
    public List<Users> getAllCustomers() {
        Role targetRole = Role.CUSTOMER; // Assuming Role is an enum with a CUSTOMER value
        return userService.getAllUsers(targetRole);
    }

//    public List<Users> getAllAdvertisers() {
//        String targetRole = "ADVERTISER";
//        return userService.getAllUsers(targetRole);
//    }
//
//    public List<Users> getAllServiceProviders() {
//        String targetRole = "SERVICEPROVIDER";
//        return userService.getAllUsers(targetRole);
//    }

    @PutMapping("/updateCustomer")
    public Users updateCustomer(
            @RequestParam(value = "userid") Long userid,
            @RequestParam(value = "enabled") boolean enabled

    ){
        return userService.updateCustomer(userid, enabled);
    }


}
