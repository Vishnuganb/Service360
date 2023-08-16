package com.service360.group50.repo;

import com.service360.group50.entity.Jobs;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsRepository extends CrudRepository<Jobs,Long>{
    List<Jobs> findAllByjobstatus(String jobstatus);

    @Query(value = "SELECT j.*, d.* FROM jobs j INNER JOIN jobdetails d ON j.detailsid = d.jobdetailsid WHERE j.jobstatus = 'completed'", nativeQuery = true)
    List<Jobs> findCompletedJobsWithDetails();

}