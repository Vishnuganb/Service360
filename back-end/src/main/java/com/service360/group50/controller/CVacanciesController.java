package com.service360.group50.controller;

import com.service360.group50.entity.Jobs;
import com.service360.group50.entity.Users;
import com.service360.group50.entity.Vacancies;
import com.service360.group50.request.CvacanciesRequest;
import com.service360.group50.service.CJobsService;
import com.service360.group50.service.CVacanciesService;
import com.service360.group50.service.ImageService;
import com.service360.group50.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")

public class CVacanciesController {

    private final CVacanciesService cVacanciesService;

    @Autowired
    private UserService userService;

    @Autowired
    private ImageService imageService;

    @PostMapping("/createvacancies")
    public Vacancies createvacancies( @RequestParam("jobsImages") MultipartFile[] jobsImages,
                                      @RequestParam("vacancytitle") String vacancytitle,
                                      @RequestParam("posteddate") String posteddate,
                                      @RequestParam("duedate") String duedate,
                                      @RequestParam("vacancylocation") String vacancylocation,
                                      @RequestParam("servicename") String servicename,
                                      @RequestParam("vacancydescription") String vacancydescription,
                                      @RequestParam("userId") Long userId,
                                      @RequestParam("qualifications") String qualifications,
                                      @RequestParam("responsibilities") String responsibilities,
                                      @RequestParam("vacancytype") String vacancytype)
                                      {
                                          String uploadDirectory = "src/main/resources/static/images/jobImages";
                                          String jobImageString = "";

                                          if (jobsImages != null) {
                                              for (MultipartFile imageFile : jobsImages) {
                                                  try {
                                                      jobImageString += imageService.saveImageToStorage(uploadDirectory, imageFile) + ",";
                                                  } catch (IOException e) {
                                                      e.printStackTrace();
                                                  }
                                              }
                                          }


        Vacancies newvacancies = new Vacancies();
        newvacancies.setVacancytitle(vacancytitle);
        newvacancies.setPosteddate(LocalDate.parse(posteddate));
        newvacancies.setDuedate(LocalDate.parse(duedate));
        newvacancies.setVacancylocation(vacancylocation);
        newvacancies.setServicename(servicename);
        newvacancies.setVacancydescription(vacancydescription);
        newvacancies.setQualifications(qualifications);
        newvacancies.setResponsibilities(responsibilities);
        newvacancies.setVacancytype(vacancytype);
        newvacancies.setImages(jobImageString);
        Users user = userService.getUser(userId);
        newvacancies.setCustomer(user);

        return cVacanciesService.createvacancies(newvacancies);
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
