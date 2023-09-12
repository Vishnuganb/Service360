package com.service360.group50.repo;

import com.service360.group50.entity.ServiceCategory;
import com.service360.group50.entity.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Services, Long> {
    Services findByServiceName ( String selectedService );
    List<Services> findByServiceCategory( ServiceCategory serviceCategory);
    Services findByServiceNameAndServiceCategory ( String selectedService, ServiceCategory servicecategory );
}
