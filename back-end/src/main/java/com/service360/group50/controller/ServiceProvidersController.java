package com.service360.group50.controller;

import com.service360.group50.entity.Jobs;
import com.service360.group50.service.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ServiceProvidersController {
    @Autowired
    private ServiceProviderService serviceProviderService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("auth/viewNewJobs")
    public List<Jobs> viewNewJobs() {
        return serviceProviderService.viewNewJobs();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("auth/viewJobs")
    public List<Jobs> viewJobs() {
        return serviceProviderService.viewJobs();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("auth/viewJobs/{id}")
    public Jobs viewAJob(@PathVariable Long id) {
        return serviceProviderService.viewAJob(id);
    }


}
