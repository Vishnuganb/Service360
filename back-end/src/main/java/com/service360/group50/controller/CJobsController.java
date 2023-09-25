package com.service360.group50.controller;

import com.service360.group50.entity.Complaints;
import com.service360.group50.entity.Jobs;
import com.service360.group50.service.CJobsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class CJobsController {

    private final CJobsService cJobsService;

    @PostMapping("/createjobs")
    public Jobs createjobs(@RequestBody Jobs newJobs) {
        return cJobsService.createjobs(newJobs);
    }

    @GetMapping("/viewjobs")
    public List<Jobs> ViewJobs() {
        return cJobsService.viewjobs();
    }

    @GetMapping("/viewjobs/{id}") // Updated the URL mapping to include the ID
    public Jobs viewJobsById(@PathVariable Long id) {
        return cJobsService.getJobsById(id); // Use the service method to retrieve the job
    }

//    @DeleteMapping("/deletejobs/{id}") // Fixed the URL mapping
//    public String deleteJobs(@PathVariable Long id) {
//        return cJobsService.deleteJobsById(id); // Use the service method
//    }
    @DeleteMapping("/deletejobs/{id}")
    public String disableJobs(@PathVariable Long id) {
        Jobs job = cJobsService.getJobsById(id);
        if (job != null) {
            job.setDisabled(true); // Mark the job as disabled
            cJobsService.updateJob(job); // Update the job in the database
            return "Job disabled successfully";
        } else {
            return "Job not found";
        }
    }



}



