package com.service360.group50.service;

import com.service360.group50.entity.Jobs;
import com.service360.group50.entity.Vacancies;
import com.service360.group50.repo.JobsRepository;
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

    //JOBS
    public List<Jobs> viewNewJobs() {
        List<Jobs> JobList = new ArrayList<>();
        jobsRepository.findAllByjobstatus("new").forEach(JobList::add);
        return JobList;
    }

    public List<Jobs> viewHistoryJobs(){
        List<Jobs> JobList = new ArrayList<>();
        jobsRepository.findCompletedJobsWithDetails().forEach(JobList::add);
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
}
