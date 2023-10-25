package com.service360.group50.service;

import com.service360.group50.entity.Complaints;
import com.service360.group50.entity.Jobs;
import com.service360.group50.repo.CJobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service

public class CJobsService{
    @Autowired

  private CJobsRepository cJobsRepository;


    public Jobs createjobs (Jobs newJobs) {
        return this.cJobsRepository.save(newJobs);
    }

    public List<Jobs> viewjobs() {
        return this.cJobsRepository.findAll();
    }

    public Jobs getJobsById(Long id) {
        Optional<Jobs> job = cJobsRepository.findById(id);
        return cJobsRepository.findById(id).orElse(null);
    }

    public String deleteJobsById(Long jobid) {
        cJobsRepository.deleteById(jobid);
        return "Job deleted successfully";
    }
    public Jobs updateJob(Jobs job) {
        return this.cJobsRepository.save(job);
    }

}
