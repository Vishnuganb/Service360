package com.service360.group50.repo;

import com.service360.group50.entity.Users;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
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

    @Transactional
    @Modifying
    @Query("UPDATE Users u " +
            "SET u.enabled = TRUE WHERE u.email = ?1")
    int enableUser(String email);

}
