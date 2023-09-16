package com.service360.group50.repo;

import com.service360.group50.dto.ServiceProviderServicesDTO;
import com.service360.group50.entity.ServiceProviderServices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServiceProviderServicesRepository extends JpaRepository<ServiceProviderServices, Long> {
    @Query("SELECT NEW com.service360.group50.dto.ServiceProviderServicesDTO(s.serviceid , sc.servicecategoryid ,ss.serviceProviderServicesId, u.userid, ss.status, s.serviceName, sc.serviceCategoryName) " +
            "FROM ServiceProviderServices ss " +
            " INNER JOIN ss.users u " +
            "INNER JOIN ss.services s " +
            "INNER JOIN ss.serviceCategory sc" +
            " where u.userid = :id")
    List<ServiceProviderServicesDTO> findAllByServiceProviderid(@Param("id") Long id);

    ServiceProviderServices findByServiceProviderServicesId(Long id);
}
