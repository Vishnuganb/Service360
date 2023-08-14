package com.service360.group50.service;

import com.service360.group50.entity.Jobs;
import com.service360.group50.repo.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServiceProviderService {
    @Autowired
    private JobsRepository jobsRepository;

    public List<Jobs> viewNewJobs() {
        List<Jobs> JobList = new ArrayList<>();
        jobsRepository.findAllByjobstatus("new").forEach(JobList::add);
        return JobList;
    }
    public List<Jobs> viewJobs() {
        List<Jobs> JobList = new ArrayList<>();
        jobsRepository.findAll().forEach(JobList::add);
        return JobList;
    }
    public Jobs viewAJob(Long id){
        return jobsRepository.findById(id).orElse(null);
    }

}
