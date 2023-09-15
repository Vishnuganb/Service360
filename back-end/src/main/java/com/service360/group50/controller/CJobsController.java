package com.service360.group50.controller;

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

//    @GetMapping("/viewCjob/id")
//    public Jobs getCjobById(@PathVariable Long id) {
//        return CJobsService.getJobById(id);
//    }

    @DeleteMapping("/deletejobs/{id}") // Fixed the URL mapping
    public String deleteJobs(@PathVariable Long id) {
        return cJobsService.deleteJobsById(id); // Use the service method
    }

}



