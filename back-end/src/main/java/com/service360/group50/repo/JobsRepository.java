package com.service360.group50.repo;

import com.service360.group50.entity.Jobs;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsRepository extends CrudRepository<Jobs,Long> {
//    List<Jobs> findAllByjobstatus(String jobstatus);

//    @Query(value = "SELECT j.*, d.* FROM jobs j INNER JOIN jobdetails d ON j.detailsid = d.jobdetailsid WHERE j.jobstatus = 'completed'", nativeQuery = true)
//    List<Jobs> findCompletedJobsWithDetails();

    @Query("SELECT j FROM Jobs j INNER JOIN j.customer u")
    List<Jobs> findAllJobsWithCustomerDetails();

    @Query("SELECT j FROM Jobs j INNER JOIN j.customer u where j.jobid = :id")
    Jobs findAJobWithCustomerDetails(@Param("id") Long id);

//    @Query("SELECT j FROM Jobs j INNER JOIN j.serviceprovider u where u.userid = :id")
//    List<Jobs> findMyJobsWithCustomerDetails(@Param("id") Long id);

    @Query("SELECT DISTINCT j, jsp.jobstatus, u " +
            "FROM Jobs j " +
            "INNER JOIN JobsServiceProviders jsp ON j.jobid = jsp.jobs.jobid " +
            "INNER JOIN j.customer u " +
            "WHERE EXISTS (SELECT 1 FROM JobsServiceProviders jsp2 WHERE j.jobid = jsp2.jobs.jobid) ")
    List<Object[]> findAllJobsWithStatusAndCustomer();
}
