package com.service360.group50.repo;

import com.service360.group50.entity.Customers;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface CustomersRepository extends JpaRepository<Customers, Long> {

    List<Customers> findAllByRegistrationdateBetween ( LocalDate startDate, LocalDate endDate );

    Optional<Customers> findByEmail ( String email );
}
