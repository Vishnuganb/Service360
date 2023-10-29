package com.service360.group50.service;

import com.service360.group50.entity.Complaints;
import com.service360.group50.entity.Jobs;
import com.service360.group50.entity.Users;
import com.service360.group50.repo.CJobsRepository;
import com.service360.group50.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service

public class CJobsService{
    @Autowired

    private CJobsRepository cJobsRepository;

    private UserRepository userRepository;

    public Jobs createjobs (Jobs newJobs) {
        return this.cJobsRepository.save(newJobs);
    }

//    public Jobs createjobs(Jobs newJobs) {
//        System.out.println("hihihihihiiiiiiiiiiiiiiii");
//        System.out.println(newJobs);
//        Users user = userRepository.findById(newJobs.getCustomer().getUserid()).orElse(null);
//
//        System.out.println(user.getUserid());
//        if (user != null) {
//            newJobs.setCustomer(user);
//            return cJobsRepository.save(newJobs);
//        } else {
//            return null;
//        }
//    }

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
