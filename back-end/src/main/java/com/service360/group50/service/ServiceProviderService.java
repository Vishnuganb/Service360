package com.service360.group50.service;

import com.service360.group50.entity.Jobs;
import com.service360.group50.entity.TrainingSession;
import com.service360.group50.entity.Vacancies;
import com.service360.group50.entity.ServiceProviderCalendar;
import com.service360.group50.repo.TrainingSessionRepository;
import com.service360.group50.repo.JobsRepository;
import com.service360.group50.repo.ServiceProviderCalendarRepository;
import com.service360.group50.repo.VacanciesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServiceProviderService {
    @Autowired
    private JobsRepository jobsRepository;
    @Autowired
    private VacanciesRepository vacanciesRepository;
    @Autowired
    private ServiceProviderCalendarRepository serviceProviderCalendarRepository;
    @Autowired
    private TrainingSessionRepository trainingSessionRepository;

    //JOBS
    public List<Jobs> viewNewJobs() {
        List<Jobs> JobList = new ArrayList<>();
        jobsRepository.findAllByjobstatus("new").forEach(JobList::add);
        return JobList;
    }

    public List<Jobs> viewHistoryJobs(){
        List<Jobs> JobList = new ArrayList<>();
//        jobsRepository.findCompletedJobsWithDetails().forEach(JobList::add);
        jobsRepository.findAllByjobstatus("completed").forEach(JobList::add);
        return JobList;
    }

    public List<Jobs> viewJobs() {
        List<Jobs> JobList = new ArrayList<>();
        jobsRepository.findAll().forEach(JobList::add);
        return JobList;
    }

    public Jobs viewAJob(Long id){
        return jobsRepository.findById(id).orElse(null);
    }


    //VACANCIES
    public List<Vacancies> viewNewVacancies() {
        List<Vacancies> VacancyList = new ArrayList<>();
        vacanciesRepository.findAllByvacancystatus("new").forEach(VacancyList::add);
        return VacancyList;
    }

    public List<Vacancies> viewVacancies() {
        List<Vacancies> VacancyList = new ArrayList<>();
        vacanciesRepository.findAll().forEach(VacancyList::add);
        return VacancyList;
    }

    public Vacancies viewAVacancy(Long id){
        return vacanciesRepository.findById(id).orElse(null);
    }


    //SP CALENDAR
    //read
    public List<ServiceProviderCalendar> viewServiceProviderCalendar() {
        List<ServiceProviderCalendar> ServiceProviderCalendarList = new ArrayList<>();
        serviceProviderCalendarRepository.findAll().forEach(ServiceProviderCalendarList::add);
        return ServiceProviderCalendarList;
    }

    //create
    public ServiceProviderCalendar createServiceProviderCalendarEvent(ServiceProviderCalendar serviceProviderCalendar){
        return serviceProviderCalendarRepository.save(serviceProviderCalendar);
    }

    //delete
    public void deleteServiceProviderCalendarEvent(Long id){
        serviceProviderCalendarRepository.deleteById(id);
    }

    public List<TrainingSession> viewTrainingSessions() {
        List<TrainingSession> TrainingSessionList = new ArrayList<>();
        trainingSessionRepository.findAll().forEach(TrainingSessionList::add);
        return TrainingSessionList;
    }

    public TrainingSession viewATrainingSession(Long id){
        return trainingSessionRepository.findById(id).orElse(null);
    }


}
