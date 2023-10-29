package com.service360.group50.controller;

import com.service360.group50.entity.Jobs;
import com.service360.group50.entity.Vacancies;
import com.service360.group50.service.CJobsService;
import com.service360.group50.service.CVacanciesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")

public class CVacanciesController {

    private final CVacanciesService cVacanciesService;

    @PostMapping("/createvacancies")
    public Vacancies createvacancies(@RequestBody Vacancies newVacancies) {
        return cVacanciesService.createvacancies(newVacancies);
    }

    @GetMapping("/viewvacancies")
    public List<Vacancies> ViewVacancies() {
        return cVacanciesService.viewvacancies();
    }

    @GetMapping("/viewvacancies/{id}") // Updated the URL mapping to include the ID
    public Vacancies viewVacanciesById(@PathVariable Long id) {
        return cVacanciesService.getVacancyById(id); // Use the service method to retrieve the job
    }

    @DeleteMapping("/deletevacancies/{id}")
    public String disableVacancies(@PathVariable Long id) {
        Vacancies vacancy = cVacanciesService.getVacancyById(id);
        if (vacancy != null) {
            vacancy.setDisabled(true); // Mark the job as disabled
            cVacanciesService.updateVacancy(vacancy); // Update the job in the database
            return "Job disabled successfully";
        } else {
            return "Job not found";
        }
    }


}
