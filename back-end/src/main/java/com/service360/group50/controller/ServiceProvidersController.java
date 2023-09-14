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
import com.service360.group50.service.ImageService;
import com.service360.group50.service.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.sql.Timestamp;
import java.util.stream.Collectors;

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
    @Autowired
    private ImageService imageService;

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

//    @GetMapping("auth/viewMyTrainingSessions")
//    public List<TrainingSession> viewMyTrainingSessions() {
//        return serviceProviderService.viewMyTrainingSessions();
//    }

    @GetMapping("auth/viewMyTrainingSessions")
    public List<TrainingSession> viewMyTrainingSessions() {
        List<TrainingSession> trainingSessions = serviceProviderService.viewMyTrainingSessions();
        String baseUrl = "http://localhost:8080/images/trainingsessions/";

        for (TrainingSession session : trainingSessions) {
            String imageFilenames = session.getTrainingimage(); // Assuming you have a method to get the image filenames
            if (imageFilenames != null && !imageFilenames.isEmpty()) {
                // Split the comma-separated filenames
                String[] filenames = imageFilenames.split(",");

                // Generate full image URLs and set them in the TrainingSession object
                List<String> imageUrls = Arrays.stream(filenames)
                        .map(filename -> baseUrl + filename.trim())
                        .collect(Collectors.toList());

                session.setTrainingImageUrls(imageUrls); // Assuming you have a setter for image URLs
            }
        }

        return trainingSessions;
    }


    @GetMapping("auth/viewTrainingSessions/{id}")
    public TrainingSession viewATrainingSession(@PathVariable Long id) {return serviceProviderService.viewATrainingSession(id);}


    @PostMapping("auth/registerTrainingSession/{id}")
    public TrainingSessionRegistration registerTrainingSession(@RequestBody TrainingSessionRegistrationRequest trainingSessionRegistrationRequest, @PathVariable Long id) throws Exception {
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

        // Generate a unique content for the QR code
        String qrCodeContent = trainingSessionRegistrationRequest.getMobilenumber();

        // Set the payment status based on the result of the payment gateway
        if (isPaymentSuccessful) {
            trainingSessionRegistration.setPaymentstatus("paid");
            starterMail.TrainingSessionInvitation(trainingSessionRegistrationRequest.getEmail(), qrCodeContent);
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
    public TrainingSession createTrainingSession(@RequestParam("trainingtitle") String trainingtitle,
                                                 @RequestParam("trainingdescription") String trainingdescription,
                                                 @RequestParam("trainingdate") Date trainingdate,
                                                 @RequestParam("trainingstarttime") Time trainingstarttime,
                                                 @RequestParam("trainingendtime") Time trainingendtime,
                                                 @RequestParam("traininglocation") String traininglocation,
                                                 @RequestParam("trainingcost") String trainingcost,
                                                 @RequestParam("servicename") String servicename,
                                                 @RequestParam("status") String status,
                                                 @RequestParam("going") Integer going,
                                                 @RequestParam("interested") Integer interested,
                                                 @RequestParam("images") MultipartFile[] imageFiles)
    {
        // Load the Users (service provider) entity by ID
        Long userId = 4L; // NEED TO FIND FOR LOGGED IN SP
        Optional<Users> userOptional = userRepository.findById(userId);
        Users serviceProvider = userOptional.orElse(null);

        String uploadDirectory = "src/main/resources/static/images/trainingsessions";

        // Create a TrainingSession entity
        TrainingSession trainingSession = new TrainingSession();
        trainingSession.setTrainingtitle(trainingtitle);
        trainingSession.setTrainingdescription(trainingdescription);
        trainingSession.setTrainingdate(trainingdate);
        trainingSession.setTrainingstarttime(trainingstarttime);
        trainingSession.setTrainingendtime(trainingendtime);
        trainingSession.setTraininglocation(traininglocation);
        trainingSession.setTrainingcost(trainingcost);
        trainingSession.setServicename(servicename);
        trainingSession.setStatus(status);
        trainingSession.setGoing(going);
        trainingSession.setInterested(interested);

        // Set the service provider for the training session
        trainingSession.setServiceprovider(serviceProvider);

        // Handle image files
        List<String> imageFileNames = new ArrayList<>();

        for (MultipartFile imageFile : imageFiles) {
            if (imageFile != null && !imageFile.isEmpty()) {
                try {
                    String savedImageFileName = imageService.saveImageToStorageServiceProvider(uploadDirectory, imageFile);
                    imageFileNames.add(savedImageFileName);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        // Concatenate image file names as a comma-separated string
        String trainingImageFileNames = String.join(",", imageFileNames);
        trainingSession.setTrainingimage(trainingImageFileNames);


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
    public Blogs createBlog(@RequestParam("blogtitle") String blogtitle,
                            @RequestParam("blogdescription") String blogdescription,
                            @RequestParam("servicename") String servicename,
                            @RequestParam("images") MultipartFile[] imageFiles){

        // Load the Users (service provider) entity by ID
        Long userId = 4L;                                                         // NEED TO FIND FOR LOGGED IN SP
        Optional<Users> userOptional = userRepository.findById(userId);
        Users serviceProvider = userOptional.orElse(null);

        String uploadDirectory = "src/main/resources/static/images/blogs";

        //Create a Blog entity
        Blogs blog = new Blogs();
        blog.setBlogtitle(blogtitle);
        blog.setBlogdescription(blogdescription);
        blog.setServicename(servicename);

        // Handle image files
        List<String> imageFileNames = new ArrayList<>();

        for (MultipartFile imageFile : imageFiles) {
            if (imageFile != null && !imageFile.isEmpty()) {
                try {
                    String savedImageFileName = imageService.saveImageToStorageServiceProvider(uploadDirectory, imageFile);
                    imageFileNames.add(savedImageFileName);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        // Set the service provider for the blog
        blog.setServiceproviders(serviceProvider);

        // Concatenate image file names as a comma-separated string
        String blogImageFileNames = String.join(",", imageFileNames);
        blog.setBlogimages(blogImageFileNames);

        // Save the Blog entity
        return serviceProviderService.createBlog(blog);
    }

    @GetMapping("auth/viewServiceProviderBlogs")
    public List<Blogs> viewServiceProviderBlogs() {
        return serviceProviderService.viewServiceProviderBlogs();
    }


}