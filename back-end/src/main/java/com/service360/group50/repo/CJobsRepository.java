package com.service360.group50.repo;

import com.service360.group50.entity.Complaints;
import com.service360.group50.entity.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CJobsRepository extends JpaRepository<Jobs, Long> {
//    List<Jobs> findJobsByCustomer(Long userid);
List<Jobs> findByIsquotation(String isquotation);
    List<Jobs> findByQuotationpdf(String quotationpdf);
    List<Jobs> findByQuotationpdfIsNotNull();

}
