package com.service360.group50.controller;

import com.service360.group50.dto.JobWithStatusDTO;
import com.service360.group50.dto.VacancyWithStatusDTO;
import com.service360.group50.email.StarterMail;
import com.service360.group50.entity.*;
import com.service360.group50.repo.JobsRepository;
import com.service360.group50.repo.TrainingSessionRepository;
import com.service360.group50.repo.UserRepository;
import com.service360.group50.repo.VacanciesRepository;
import com.service360.group50.request.*;
import com.service360.group50.service.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.sql.Timestamp;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceProvidersController {
    @Autowired
    private ServiceProviderService serviceProviderService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private VacanciesRepository vacanciesRepository;
    @Autowired
    private JobsRepository jobsRepository;
    @Autowired
    private TrainingSessionRepository trainingSessionRepository;
    @Autowired
    private StarterMail starterMail;

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


    @GetMapping("auth/viewJobReplies/{jobid}")
    public List<JobReplies> viewJobReplies(@PathVariable Long jobid) {
        return serviceProviderService.viewJobReplies(jobid);
    }


    @PostMapping("auth/AddJobReply/{jobid}")
    public JobReplies addJobReply(@RequestBody JobRepliesRequest jobRepliesRequest, @PathVariable Long jobid){
        // Load the Users (service provider) entity by ID
        Long userId = 4L;                                                         // NEED TO FIND FOR LOGGED IN SP
        Optional<Users> userOptional = userRepository.findById(userId);
        Users serviceProvider = userOptional.orElse(null);

        // Load the Jobs entity by ID
        Optional<Jobs> jobOptional = jobsRepository.findById(jobid);
        Jobs job = jobOptional.orElse(null);

        // Create a JobReplies entity
        JobReplies jobReply = new JobReplies();
        jobReply.setReplymessage(jobRepliesRequest.getReplymessage());

        // Set the dateapplied for the vacancy application
        LocalDate today = LocalDate.now();
        jobReply.setReplydate(today);

        // Set the service provider for the job reply
        jobReply.setServiceproviders(serviceProvider);

        // Set the job for the job reply
        jobReply.setJobs(job);

        // Save the JobReplies entity
        return serviceProviderService.addJobReply(jobReply);
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

    @GetMapping("auth/viewNewVacancies/{id}")
    public Vacancies viewAVacancy(@PathVariable Long id) {return serviceProviderService.viewAVacancy(id);}

    @PostMapping("auth/applyVacancy/{id}")
    public VacancyApplications applyvacancy(@RequestBody VacancyApplicationsRequest vacancyApplicationsRequest, @PathVariable Long id) {
        // Load the Users (service provider) entity by ID
        Long userId = 4L;                                                         // NEED TO FIND FOR LOGGED IN SP
        Optional<Users> userOptional = userRepository.findById(userId);
        Users serviceProvider = userOptional.orElse(null);

        // Load the Vacancies entity by ID
        Optional<Vacancies> vacancyOptional = vacanciesRepository.findById(id);
        Vacancies vacancy = vacancyOptional.orElse(null);

        // Create a VacancyApplications entity
        VacancyApplications vacancyApplication = new VacancyApplications();
        vacancyApplication.setFirstname(vacancyApplicationsRequest.getFirstname());
        vacancyApplication.setLastname(vacancyApplicationsRequest.getLastname());
        vacancyApplication.setContactnumber(vacancyApplicationsRequest.getContactnumber());
        vacancyApplication.setEmailaddress(vacancyApplicationsRequest.getEmailaddress());
        vacancyApplication.setEducationqualification(vacancyApplicationsRequest.getEducationqualification());
        vacancyApplication.setYearsofexperience(vacancyApplicationsRequest.getYearsofexperience());
        vacancyApplication.setSalaryexpectation(vacancyApplicationsRequest.getSalaryexpectation());
        vacancyApplication.setCvfile(vacancyApplicationsRequest.getCvfile());

        // Set the service provider for the vacancy application
        vacancyApplication.setServiceproviders(serviceProvider);

        // Set the vacancy for the vacancy application
        vacancyApplication.setVacancies(vacancy);

        // Set the dateapplied for the vacancy application
        Timestamp currentTimestamp = new Timestamp(System.currentTimeMillis());
        vacancyApplication.setDateapplied(currentTimestamp);

        // Save the VacancyApplications entity
        return serviceProviderService.applyvacancy(vacancyApplication);
    }

    @PutMapping("auth/updateVacancyStatusInviteToOngoing/{id}")
    public VacanciesServiceProviders updateVacancyInvitetoOngoing(@PathVariable Long id) {
        return serviceProviderService.updateVacancyInvitetoOngoing(id);
    }


    @PutMapping("auth/updateVacancyStatusInviteToRejected/{id}")
    public VacanciesServiceProviders updateVacancyInvitetoRejected(@PathVariable Long id) {
        return serviceProviderService.updateVacancyInvitetoRejected(id);
    }


    //SP CALENDAR
    @GetMapping("auth/viewServiceProviderCalendar")
    public List<ServiceProviderCalendar> viewServiceProviderCalendar() {
        return serviceProviderService.viewServiceProviderCalendar();
    }

    @PostMapping("auth/createServiceProviderCalendar")
    public ServiceProviderCalendar createServiceProviderCalendarEvent(@RequestBody ServiceProviderCalendar serviceProviderCalendar) {
        return serviceProviderService.createServiceProviderCalendarEvent(serviceProviderCalendar);
    }

    @DeleteMapping("auth/deleteServiceProviderCalendar/{id}")
    public void deleteServiceProviderCalendarEvent(@PathVariable Long id) {
        serviceProviderService.deleteServiceProviderCalendarEvent(id);
    }

//    //TRAINING SESSIONS
    @GetMapping("auth/viewTrainingSessions")
    public List<TrainingSession> viewTrainingSessions() {
        return serviceProviderService.viewTrainingSessions();
    }

    // NEED TO FIND FOR LOGGED IN SP
    @GetMapping("auth/viewMyTrainingSessions")
    public List<TrainingSession> viewMyTrainingSessions() {
        return serviceProviderService.viewMyTrainingSessions();
    }

    @GetMapping("auth/viewTrainingSessions/{id}")
    public TrainingSession viewATrainingSession(@PathVariable Long id) {return serviceProviderService.viewATrainingSession(id);}


    @PostMapping("auth/registerTrainingSession/{id}")
    public TrainingSessionRegistration registerTrainingSession(@RequestBody TrainingSessionRegistrationRequest trainingSessionRegistrationRequest, @PathVariable Long id) {
        // Load the Users (service provider) entity by ID
        Long userId = 4L;                                                         // NEED TO FIND FOR LOGGED IN SP
        Optional<Users> userOptional = userRepository.findById(userId);
        Users serviceProvider = userOptional.orElse(null);

        // Load the TrainingSession entity by ID
        Optional<TrainingSession> trainingSessionOptional = trainingSessionRepository.findById(id);
        TrainingSession trainingSession = trainingSessionOptional.orElse(null);

        // Create a TrainingSessionRegistration entity
        TrainingSessionRegistration trainingSessionRegistration = new TrainingSessionRegistration();
        trainingSessionRegistration.setMobilenumber(trainingSessionRegistrationRequest.getMobilenumber());
        trainingSessionRegistration.setEmail(trainingSessionRegistrationRequest.getEmail());


        /*
        // Payment gateway Api call here
        boolean isPaymentSuccessful = processPayment(); // This function should return true if payment is successful
         */

        boolean isPaymentSuccessful= true;         //sample data

        // Set the payment status based on the result of the payment gateway
        if (isPaymentSuccessful) {
            trainingSessionRegistration.setPaymentstatus("paid");
            starterMail.TrainingSessionInvitation(trainingSessionRegistrationRequest.getEmail());
        } else {
            trainingSessionRegistration.setPaymentstatus("not paid");
        }

        // Set the service provider for the training session registration
        trainingSessionRegistration.setServiceprovider(serviceProvider);

        // Set the training session for the training session registration
        trainingSessionRegistration.setTrainingsession(trainingSession);

        // Save the TrainingSessionRegistration entity
        return serviceProviderService.registerTrainingSession(trainingSessionRegistration);
    }


    @PostMapping("auth/createTrainingSession")
    public TrainingSession createTrainingSession(@RequestBody TrainingSessionRequest trainingSessionRequest) {
        // Load the Users (service provider) entity by ID
        Long userId = 4L;                                                         // NEED TO FIND FOR LOGGED IN SP
        Optional<Users> userOptional = userRepository.findById(userId);
        Users serviceProvider = userOptional.orElse(null);

        // Create a TrainingSession entity
        TrainingSession trainingSession = new TrainingSession();
        trainingSession.setTrainingimage(trainingSessionRequest.getTrainingimage());
        trainingSession.setTrainingtitle(trainingSessionRequest.getTrainingtitle());
        trainingSession.setTrainingdescription(trainingSessionRequest.getTrainingdescription());
        trainingSession.setTrainingdate(trainingSessionRequest.getTrainingdate());
        trainingSession.setTrainingstarttime(trainingSessionRequest.getTrainingstarttime());
        trainingSession.setTrainingendtime(trainingSessionRequest.getTrainingendtime());
        trainingSession.setTraininglocation(trainingSessionRequest.getTraininglocation());
        trainingSession.setTrainingcost(trainingSessionRequest.getTrainingcost());
        trainingSession.setServicename(trainingSessionRequest.getServicename());
        trainingSession.setStatus(trainingSessionRequest.getStatus());
        trainingSession.setGoing(trainingSessionRequest.getGoing());
        trainingSession.setInterested(trainingSessionRequest.getInterested());

        // Set the service provider for the training session
        trainingSession.setServiceprovider(serviceProvider);

        // Save the TrainingSession entity
        return serviceProviderService.createTrainingSession(trainingSession);
    }

    @PutMapping("auth/publishTrainingSession/{id}")
    public TrainingSession publishTrainingSession(@PathVariable Long id) {
        // Load the TrainingSession entity by ID
        Optional<TrainingSession> trainingSessionOptional = trainingSessionRepository.findById(id);
        TrainingSession trainingSession = trainingSessionOptional.orElse(null);

        /*
            // Payment gateway Api call here
            boolean isPaymentSuccessful = processPayment(); // This function should return true if payment is successful
        */

        boolean isPaymentSuccessful= true;         //sample data

        // Set the payment status based on the result of the payment gateway
        if (isPaymentSuccessful) {
            trainingSession.setStatus("Ready to publish");
            return serviceProviderService.publishTrainingSession(trainingSession);
        } else {
            return null;
        }
    }


    //BLOGS
    @PostMapping("auth/createBlog")
    public Blogs createBlog(@RequestBody BlogsRequest blogsRequest){
        // Load the Users (service provider) entity by ID
        Long userId = 4L;                                                         // NEED TO FIND FOR LOGGED IN SP
        Optional<Users> userOptional = userRepository.findById(userId);
        Users serviceProvider = userOptional.orElse(null);

        //Create a Blog entity
        Blogs blog = new Blogs();
        blog.setBlogtitle(blogsRequest.getBlogtitle());
        blog.setBlogdescription(blogsRequest.getBlogdescription());
        blog.setBlogimages(blogsRequest.getBlogimages());
        blog.setServicename(blogsRequest.getServicename());

        // Set the service provider for the blog
        blog.setServiceproviders(serviceProvider);

        // Save the Blog entity
        return serviceProviderService.createBlog(blog);
    }

    @GetMapping("auth/viewServiceProviderBlogs")
    public List<Blogs> viewServiceProviderBlogs() {
        return serviceProviderService.viewServiceProviderBlogs();
    }


}