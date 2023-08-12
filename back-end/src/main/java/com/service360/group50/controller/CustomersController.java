package com.service360.group50.controller;

import com.service360.group50.entity.Customers;
import com.service360.group50.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomersController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping("/customers")
    public List<Customers> getAllCustomers() {
        return customerService.getCustomers();
    }
}
