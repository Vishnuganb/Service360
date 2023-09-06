package com.service360.group50.controller;

import com.service360.group50.dto.JobWithStatusDTO;
import com.service360.group50.dto.VacancyWithStatusDTO;
import com.service360.group50.entity.*;
import com.service360.group50.service.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceProvidersController {
    @Autowired
    private ServiceProviderService serviceProviderService;

    //JOBS
    @GetMapping("auth/viewNewJobs")
    public List<Jobs> viewNewJobs() {
        return serviceProviderService.viewNewJobs();
    }


    @GetMapping("auth/viewHistoryJobs")
    public List<Jobs> viewHistoryJobs(){
        return serviceProviderService.viewHistoryJobs();
    }


    // NEED TO FIND FOR LOGGED IN SP
    @GetMapping("auth/viewMyJobs")
    public List<JobWithStatusDTO> viewMyJobs() {
        return serviceProviderService.viewMyJobs();
    }


    @GetMapping("auth/viewNewJobs/{id}")
    public Jobs viewAJob(@PathVariable Long id) {
        return serviceProviderService.viewAJob(id);
    }

    @PutMapping("auth/updateJobStatusInviteToPending/{id}")
    public JobsServiceProviders updateJobInvitetoPending(@PathVariable Long id) {
        return serviceProviderService.updateJobInvitetoPending(id);
    }


    @PutMapping("auth/updateJobStatusInviteToOngoing/{id}")
    public JobsServiceProviders updateJobInvitetoOngoing(@PathVariable Long id) {
        return serviceProviderService.updateJobInvitetoOngoing(id);
    }


    @PutMapping("auth/updateJobStatusInviteToRejected/{id}")
    public JobsServiceProviders updateJobInvitetoRejected(@PathVariable Long id) {
        return serviceProviderService.updateJobInvitetoRejected(id);
    }


    //VACANCIES
    @GetMapping("auth/viewNewVacancies")
    public List<Vacancies> viewNewVacancies() {
        return serviceProviderService.viewNewVacancies();
    }


    @GetMapping("auth/viewHistoryVacancies")
    public List<Vacancies> viewHistoryVacancies(){
        return serviceProviderService.viewHistoryVacancies();
    }

    @GetMapping("auth/viewMyVacancies")
    public List<VacancyWithStatusDTO> viewMyVacancies() {
        return serviceProviderService.viewMyVacancies();
    }
//
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("auth/viewNewVacancies/{id}")
    public Vacancies viewAVacancy(@PathVariable Long id) {return serviceProviderService.viewAVacancy(id);}
//
    //SP CALENDAR
    //read
    @GetMapping("auth/viewServiceProviderCalendar")
    public List<ServiceProviderCalendar> viewServiceProviderCalendar() {
        return serviceProviderService.viewServiceProviderCalendar();
    }

    //create
    @PostMapping("auth/createServiceProviderCalendar")
    public ServiceProviderCalendar createServiceProviderCalendarEvent(@RequestBody ServiceProviderCalendar serviceProviderCalendar) {
        return serviceProviderService.createServiceProviderCalendarEvent(serviceProviderCalendar);
    }

    //delete
    @DeleteMapping("auth/deleteServiceProviderCalendar/{id}")
    public void deleteServiceProviderCalendarEvent(@PathVariable Long id) {
        serviceProviderService.deleteServiceProviderCalendarEvent(id);
    }

//    //TRAINING SESSIONS
    @GetMapping("auth/viewTrainingSessions")
    public List<TrainingSession> viewTrainingSessions() {
        return serviceProviderService.viewTrainingSessions();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("auth/viewTrainingSessions/{id}")
    public TrainingSession viewATrainingSession(@PathVariable Long id) {return serviceProviderService.viewATrainingSession(id);}

}