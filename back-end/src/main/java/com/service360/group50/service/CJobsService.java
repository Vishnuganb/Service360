package com.service360.group50.service;

import com.service360.group50.entity.Jobs;
import com.service360.group50.repo.CJobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service

public class CJobsService<Cjob> {
    @Autowired

  private CJobsRepository cJobsRepository;

    // Add a method to retrieve a job by its ID
//    public static Jobs getJobById(Long jobId) {
//        Optional<Jobs> job = cJobsRepository.findById(jobId);
//        return CJobsRepository.orElse(null); // Return null if job with the given ID is not found
//    }


    public Jobs createjobs (Jobs newJobs) {
        return this.cJobsRepository.save(newJobs);
    }

    public List<Jobs> viewjobs() {
        return this.cJobsRepository.findAll();
    }

    public String deleteJobsById(Long jobid) {
        cJobsRepository.deleteById(jobid);
        return "Job deleted successfully";
    }



}
