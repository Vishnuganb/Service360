package com.service360.group50.service;

import com.service360.group50.dto.JobWithStatusDTO;
import com.service360.group50.dto.VacancyWithStatusDTO;
import com.service360.group50.entity.*;
import com.service360.group50.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceProviderService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JobsRepository jobsRepository;
    @Autowired
    private VacanciesRepository vacanciesRepository;
    @Autowired
    private ServiceProviderCalendarRepository serviceProviderCalendarRepository;
    @Autowired
    private TrainingSessionRepository trainingSessionRepository;
    @Autowired
    private JobsServiceProvidersRepository jobsServiceProvidersRepository;
    @Autowired
    private VacanciesServiceProvidersRepository vacanciesServiceProvidersRepository;

    //JOBS
    public List<Jobs> viewNewJobs() {
        List<Jobs> JobList = new ArrayList<>();
        jobsRepository.findAllJobsWithCustomerDetails().forEach(JobList::add);
        return JobList;
    }


    // NEED TO FIND FOR LOGGED IN SP
    public List<JobWithStatusDTO> viewMyJobs() {
        List<JobWithStatusDTO> jobList = new ArrayList<>();

        // Step 1: Retrieve job IDs with statuses
        List<Object[]> jobIdsWithStatus = jobsServiceProvidersRepository.findMyJobsIdsWithStatus();

        // Extract job IDs from the result
        List<Long> jobIds = jobIdsWithStatus.stream()
                .map(result -> (Long) result[0])
                .collect(Collectors.toList());

        // Extract job statuses from the result
        List<String> jobStatuses = jobIdsWithStatus.stream()
                .map(result -> (String) result[1])
                .collect(Collectors.toList());

        // Step 2: Retrieve job details for those job IDs
        if (!jobIds.isEmpty()) {
            List<Object[]> jobDetails = jobsRepository.findMyJobs(jobIds);

            // Create JobWithStatusDTO objects and add to the jobList
            for (int i = 0; i < jobDetails.size(); i++) {
                Object[] jobData = jobDetails.get(i);
                Jobs job = (Jobs) jobData[0];

                // Create a new JobWithStatusDTO object and add it to the list
                JobWithStatusDTO jobWithStatus = new JobWithStatusDTO(job, jobStatuses.get(i));
                jobList.add(jobWithStatus);
            }
        }

        return jobList;
    }


    public List<Jobs> viewHistoryJobs() {
        // Step 1: Retrieve job IDs
        List<Long> completedJobIds = jobsServiceProvidersRepository.findAllByjobstatus("completed");

        // Step 2: Retrieve job details for those job IDs
        if (!completedJobIds.isEmpty()) {
            List<Object[]> jobDetails = jobsRepository.findMyJobs(completedJobIds);

            // Extract Jobs objects and return them
            return jobDetails.stream()
                    .map(jobData -> (Jobs) jobData[0])
                    .collect(Collectors.toList());
        }

        return Collections.emptyList(); // Return an empty list if no jobs found
    }


    public Jobs viewAJob(Long id){
        return jobsRepository.findAJobWithCustomerDetails(id);
    }


    public JobsServiceProviders updateJobInvitetoPending(Long id) {             // NEED TO FIND FOR LOGGED IN SP AND PASS AS PARAMETER
        JobsServiceProviders existingJob = jobsServiceProvidersRepository.findByjobid(id);
        existingJob.setJobstatus("pending");
        return jobsServiceProvidersRepository.save(existingJob);
    }


    public JobsServiceProviders updateJobInvitetoOngoing(Long id) {             // NEED TO FIND FOR LOGGED IN SP AND PASS AS PARAMETER
        JobsServiceProviders existingJob = jobsServiceProvidersRepository.findByjobid(id);
        existingJob.setJobstatus("ongoing");
        return jobsServiceProvidersRepository.save(existingJob);
    }


    public JobsServiceProviders updateJobInvitetoRejected(Long id) {            // NEED TO FIND FOR LOGGED IN SP AND PASS AS PARAMETER
        JobsServiceProviders existingJob = jobsServiceProvidersRepository.findByjobid(id);
        existingJob.setJobstatus("rejected");
        return jobsServiceProvidersRepository.save(existingJob);
    }


    //VACANCIES
    public List<Vacancies> viewNewVacancies() {
        List<Vacancies> VacancyList = new ArrayList<>();
        vacanciesRepository.findAllVacanciesWithCustomerDetails().forEach(VacancyList::add);
        return VacancyList;
    }


    public List<VacancyWithStatusDTO> viewMyVacancies() {
        List<VacancyWithStatusDTO> vacancyList = new ArrayList<>();

        // Step 1: Retrieve job IDs with statuses
        List<Object[]> vacancyIdsWithStatus = vacanciesServiceProvidersRepository.findMyVacanciesIdsWithStatus();

        // Extract job IDs from the result
        List<Long> vacancyIds = vacancyIdsWithStatus.stream()
                .map(result -> (Long) result[0])
                .collect(Collectors.toList());

        // Extract job statuses from the result
        List<String> vacancyStatuses = vacancyIdsWithStatus.stream()
                .map(result -> (String) result[1])
                .collect(Collectors.toList());

        // Step 2: Retrieve vacancy details for those vacancy IDs
        if (!vacancyIds.isEmpty()) {
            List<Object[]> vacancyDetails = vacanciesRepository.findMyVacancies(vacancyIds);

            // Create JobWithStatusDTO objects and add to the jobList
            for (int i = 0; i < vacancyDetails.size(); i++) {
                Object[] vacancyData = vacancyDetails.get(i);
                Vacancies vacancy = (Vacancies) vacancyData[0];

                // Create a new JobWithStatusDTO object and add it to the list
                VacancyWithStatusDTO vacancyWithStatus = new VacancyWithStatusDTO(vacancy, vacancyStatuses.get(i));
                vacancyList.add(vacancyWithStatus);
            }
        }

        return vacancyList;
    }


    public List<Vacancies> viewHistoryVacancies() {
        // Step 1: Retrieve job IDs
        List<Long> completedVacancyIds = vacanciesServiceProvidersRepository.findAllByvacancystatus("completed");

        // Step 2: Retrieve job details for those job IDs
        if (!completedVacancyIds.isEmpty()) {
            List<Object[]> vacancyDetails = vacanciesRepository.findMyVacancies(completedVacancyIds);

            // Extract Jobs objects and return them
            return vacancyDetails.stream()
                    .map(vacancyData -> (Vacancies) vacancyData[0])
                    .collect(Collectors.toList());
        }

        return Collections.emptyList(); // Return an empty list if no jobs found
    }


    public Vacancies viewAVacancy(Long id){
        return vacanciesRepository.findAVacancyWithCustomerDetails(id);
    }



    public VacanciesServiceProviders updateVacancyInvitetoOngoing(Long id) {             // NEED TO FIND FOR LOGGED IN SP AND PASS AS PARAMETER
        VacanciesServiceProviders existingVacancy = vacanciesServiceProvidersRepository.findByvacancyid(id);
        existingVacancy.setVacancystatus("ongoing");
        return vacanciesServiceProvidersRepository.save(existingVacancy);
    }


    public VacanciesServiceProviders updateVacancyInvitetoRejected(Long id) {            // NEED TO FIND FOR LOGGED IN SP AND PASS AS PARAMETER
        VacanciesServiceProviders existingVacancy = vacanciesServiceProvidersRepository.findByvacancyid(id);
        existingVacancy.setVacancystatus("rejected");
        return vacanciesServiceProvidersRepository.save(existingVacancy);
    }



    //SP CALENDAR
    public List<ServiceProviderCalendar> viewServiceProviderCalendar() {
        List<ServiceProviderCalendar> ServiceProviderCalendarList = new ArrayList<>();
        serviceProviderCalendarRepository.findAll().forEach(ServiceProviderCalendarList::add);      // NEED TO FIND FOR LOGGED IN SP
        return ServiceProviderCalendarList;
    }

    public ServiceProviderCalendar createServiceProviderCalendarEvent(ServiceProviderCalendar serviceProviderCalendar){
        return serviceProviderCalendarRepository.save(serviceProviderCalendar);
    }

    public void deleteServiceProviderCalendarEvent(Long id){
        serviceProviderCalendarRepository.deleteById(id);
    }


    //TRAINING SESSION
    public List<TrainingSession> viewTrainingSessions() {
        List<TrainingSession> TrainingSessionList = new ArrayList<>();
        trainingSessionRepository.findAllTrainingSessionsWithSpDetails().forEach(TrainingSessionList::add);
        return TrainingSessionList;
    }

    public TrainingSession viewATrainingSession(Long id){
        return trainingSessionRepository.findATrainingSessionWithSpDetails(id);
    }

    public List<TrainingSession> viewMyTrainingSessions() {
        List<TrainingSession> TrainingSessionList = new ArrayList<>();
        trainingSessionRepository.findAllTrainingSessionsWithSpDetails().forEach(TrainingSessionList::add);          // NEED TO FIND FOR LOGGED IN SP
        return TrainingSessionList;
    }

    public TrainingSession createTrainingSession(TrainingSession trainingSession){
        return trainingSessionRepository.save(trainingSession);
    }

}
