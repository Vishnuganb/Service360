package com.service360.group50.repo;

import com.service360.group50.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    Optional<Users> findByEmail ( String email );

    List<Users> findAllByRegistrationdateBetween ( LocalDate startDate, LocalDate endDate );

    List<Users> findByRole ( String role );


    Optional<Users> findByEmailIgnoreCase(String email);


}