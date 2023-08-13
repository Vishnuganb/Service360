package com.service360.group50.service;

import com.service360.group50.entity.Customers;
import com.service360.group50.repo.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomersRepository customersRepository;

    public List<Customers> getCustomers( LocalDate startDate, LocalDate endDate) {
        List<Customers> customersList = new ArrayList<> ( );
        if (startDate != null || endDate != null) {
            return customersRepository.findAllByRegistrationdateBetween(startDate, endDate);
        }else {
            customersRepository.findAll ( ).forEach ( customersList::add );
        }
        return customersList;
    }
    public Customers createCustomer ( Customers customers ) {
        return customersRepository.save(customers);
    }
    public Customers getCustomerById ( Long customerId ) {
        return customersRepository.findById(customerId).get();
    }
    public Customers updateCustomer ( Customers customers ) {
        return customersRepository.save(customers);
    }

    public String deleteCustomerById ( Long customerId ) {
        customersRepository.deleteById(customerId);
        return "Customer deleted successfully";
    }
}
