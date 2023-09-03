package com.service360.group50.service;

import com.service360.group50.dto.JobWithStatusDTO;
import com.service360.group50.entity.*;
import com.service360.group50.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    //JOBS
    public List<Jobs> viewNewJobs() {
        List<Jobs> JobList = new ArrayList<>();
        jobsRepository.findAllJobsWithCustomerDetails().forEach(JobList::add);
        return JobList;
    }


/*

    public List<Jobs> viewHistoryJobs(){
        List<Jobs> JobList = new ArrayList<>();
//        jobsRepository.findCompletedJobsWithDetails().forEach(JobList::add);
        jobsRepository.findAllByjobstatus("completed").forEach(JobList::add);
        return JobList;
    }

 */

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


    public Jobs viewAJob(Long id){
        return jobsRepository.findAJobWithCustomerDetails(id);
    }

    /*

    public Jobs updateJobInvitetoPending(Long id) {
        Jobs existingJob = jobsRepository.findById(id).orElse(null);
//        existingJob.setJobstatus("pending");
        return jobsRepository.save(existingJob);
    }

    public Jobs updateJobInvitetoOngoing(Long id) {
        Jobs existingJob = jobsRepository.findById(id).orElse(null);
//        existingJob.setJobstatus("ongoing");
        return jobsRepository.save(existingJob);
    }

    public Jobs updateJobInvitetoRejected(Long id) {
        Jobs existingJob = jobsRepository.findById(id).orElse(null);
//        existingJob.setJobstatus("rejected");
        return jobsRepository.save(existingJob);
    }

*/

    //VACANCIES
    public List<Vacancies> viewNewVacancies() {
        List<Vacancies> VacancyList = new ArrayList<>();
        vacanciesRepository.findAllVacanciesWithCustomerDetails().forEach(VacancyList::add);
        return VacancyList;
    }

/*
    public List<Vacancies> viewVacancies() {
        List<Vacancies> VacancyList = new ArrayList<>();
        vacanciesRepository.findAll().forEach(VacancyList::add);
        return VacancyList;
    }

 */

    public Vacancies viewAVacancy(Long id){
        return vacanciesRepository.findAVacancyWithCustomerDetails(id);
    }


    //SP CALENDAR
    //read
    public List<ServiceProviderCalendar> viewServiceProviderCalendar() {
        List<ServiceProviderCalendar> ServiceProviderCalendarList = new ArrayList<>();
        serviceProviderCalendarRepository.findAll().forEach(ServiceProviderCalendarList::add);      // NEED TO FIND FOR LOGGED IN SP
        return ServiceProviderCalendarList;
    }

    /*

    //create
    public ServiceProviderCalendar createServiceProviderCalendarEvent(ServiceProviderCalendar serviceProviderCalendar){
        return serviceProviderCalendarRepository.save(serviceProviderCalendar);
    }

    //delete
    public void deleteServiceProviderCalendarEvent(Long id){
        serviceProviderCalendarRepository.deleteById(id);
    }

     */

    public List<TrainingSession> viewTrainingSessions() {
        List<TrainingSession> TrainingSessionList = new ArrayList<>();
        trainingSessionRepository.findAllTrainingSessionsWithSpDetails().forEach(TrainingSessionList::add);
        return TrainingSessionList;
    }

    public TrainingSession viewATrainingSession(Long id){
        return trainingSessionRepository.findATrainingSessionWithSpDetails(id);
    }

}
