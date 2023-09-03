package com.service360.group50.controller;

import com.service360.group50.dto.JobWithStatusDTO;
import com.service360.group50.entity.Jobs;
import com.service360.group50.entity.TrainingSession;
import com.service360.group50.entity.Vacancies;
import com.service360.group50.entity.ServiceProviderCalendar;
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

//    @CrossOrigin(origins = "http://localhost:3000")
//    @GetMapping("auth/viewHistory")
//    public List<Jobs> viewHistoryJobs(){
//        return serviceProviderService.viewHistoryJobs();
//    }
//

    // NEED TO FIND FOR LOGGED IN SP
    @GetMapping("auth/viewMyJobs")
    public List<JobWithStatusDTO> viewMyJobs() {
        return serviceProviderService.viewMyJobs();
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("auth/viewNewJobs/{id}")
    public Jobs viewAJob(@PathVariable Long id) {
        return serviceProviderService.viewAJob(id);
    }

//    @CrossOrigin(origins = "http://localhost:3000")
//    @PutMapping("auth/updateJobStatusInviteToPending/{id}")
//    public Jobs updateJobInvitetoPending(@PathVariable Long id) {
//        return serviceProviderService.updateJobInvitetoPending(id);
//    }
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @PutMapping("auth/updateJobStatusInviteToOngoing/{id}")
//    public Jobs updateJobInvitetoOngoing(@PathVariable Long id) {
//        return serviceProviderService.updateJobInvitetoOngoing(id);
//    }
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @PutMapping("auth/updateJobStatusInviteToRejected/{id}")
//    public Jobs updateJobInvitetoRejected(@PathVariable Long id) {
//        return serviceProviderService.updateJobInvitetoRejected(id);
//    }
//
    //VACANCIES
    @GetMapping("auth/viewNewVacancies")
    public List<Vacancies> viewNewVacancies() {
        return serviceProviderService.viewNewVacancies();
    }
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @GetMapping("auth/viewVacancies")
//    public List<Vacancies> viewVacancies() {
//        return serviceProviderService.viewVacancies();
//    }
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

//    //create
//    @CrossOrigin(origins = "http://localhost:3000")
//    @PostMapping("auth/createServiceProviderCalendar")
//    public ServiceProviderCalendar createServiceProviderCalendarEvent(@RequestBody ServiceProviderCalendar serviceProviderCalendar) {
//        return serviceProviderService.createServiceProviderCalendarEvent(serviceProviderCalendar);
//    }
//
//    //delete
//    @CrossOrigin(origins = "http://localhost:3000")
//    @DeleteMapping("auth/deleteServiceProviderCalendar/{id}")
//    public void deleteServiceProviderCalendarEvent(@PathVariable Long id) {
//        serviceProviderService.deleteServiceProviderCalendarEvent(id);
//    }
//
//    //TRAINING SESSIONS
    @GetMapping("auth/viewTrainingSessions")
    public List<TrainingSession> viewTrainingSessions() {
        return serviceProviderService.viewTrainingSessions();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("auth/viewTrainingSessions/{id}")
    public TrainingSession viewATrainingSession(@PathVariable Long id) {return serviceProviderService.viewATrainingSession(id);}

}
