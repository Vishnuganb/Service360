package com.service360.group50.repo;

import com.service360.group50.entity.JobsServiceProviders;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JobsServiceProvidersRepository extends CrudRepository<JobsServiceProviders,Long> {

    @Query("SELECT jsp.jobs.jobid, jsp.jobstatus FROM JobsServiceProviders jsp")
    List<Object[]> findMyJobsIdsWithStatus();

}
