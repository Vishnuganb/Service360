package com.service360.group50.service;

import com.service360.group50.entity.Customers;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;
import java.util.List;

@Service
public class CustomerService {

    static List <Customers> customersList = Arrays.asList (
            new Customers(1L,"John", "Doe", "vishnu@gmail.com", "123-456-7890", "chava",
                    LocalDate.of(2023, Month.JANUARY, 7), "vvv", "customer", true, true)

    );

    public List<Customers> getCustomers() {
        return customersList;
    }

}
