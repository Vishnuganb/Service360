package com.service360.group50.controller;

import com.service360.group50.entity.Complaints;
import com.service360.group50.entity.Jobs;
import com.service360.group50.entity.Users;
import com.service360.group50.request.CjobsRequest;
import com.service360.group50.service.CJobsService;
import com.service360.group50.service.ImageService;
import com.service360.group50.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class CJobsController {

    private final CJobsService cJobsService;

    @Autowired
    private UserService userService;

    @Autowired
    private ImageService imageService;

    @PostMapping("/createjobs")
    public Jobs createjobs(
            @RequestParam("jobsImages") MultipartFile[] jobsImages,
            @RequestParam("jobtitle") String jobtitle,
            @RequestParam("posteddate") String posteddate,
            @RequestParam("duedate") String duedate,
            @RequestParam("joblocation") String joblocation,
            @RequestParam("servicename") String servicename,
            @RequestParam("jobdescription") String jobdescription,
            @RequestParam("userId") Long userId,
            @RequestParam("isquotation") boolean isquotation) {

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

        Jobs newjobs = new Jobs();
        newjobs.setJobtitle(jobtitle);
        newjobs.setJobdescription(jobdescription);
        newjobs.setDuedate(LocalDate.parse(duedate));
        newjobs.setJoblocation(joblocation);
        newjobs.setImages(jobImageString);
        newjobs.setServicename(servicename);
        newjobs.setPosteddate(LocalDate.parse(posteddate));
        newjobs.setIsquotation(String.valueOf(isquotation));

        Users user = userService.getUser(userId);
        newjobs.setCustomer(user);

        return cJobsService.createjobs(newjobs);
    }

    @GetMapping("/viewjobs")
    public List<Jobs> ViewJobs() {
        return cJobsService.viewjobs();
    }

//    @GetMapping("/viewjobsbyuserid/{userid}")
//    public List<Jobs> ViewJobsbyuserid(@PathVariable Long userid) {
//        return cJobsService.viewJobsbyuserid(userid);
//    }


    @GetMapping("/viewjobs/{id}") // Updated the URL mapping to include the ID
    public Jobs viewJobsById(@PathVariable Long id) {
        return cJobsService.getJobsById(id); // Use the service method to retrieve the job
    }

    //    @DeleteMapping("/deletejobs/{id}") // Fixed the URL mapping
//    public String deleteJobs(@PathVariable Long id) {
//        return cJobsService.deleteJobsById(id); // Use the service method
//    }
    @DeleteMapping("/deletejobs/{id}")
    public String disableJobs(@PathVariable Long id) {
        Jobs job = cJobsService.getJobsById(id);
        if (job != null) {
            job.setDisabled(true); // Mark the job as disabled
            cJobsService.updateJob(job); // Update the job in the database
            return "Job disabled successfully";
        } else {
            return "Job not found";
        }
    }

    @GetMapping("/quotation")
    public List<Jobs> getQuotationJobs(@RequestParam String isQuotation) {
        return cJobsService.getJobsByIsQuotation(isQuotation);
    }
//    @GetMapping("/quotationpdf")
//    public List<Jobs> getQuotationPdfs(@RequestParam String quotationpdf) {
//        return cJobsService.getJobsByQuotationpdf(quotationpdf);
//    }
    @GetMapping("/quotationpdf")
    public List<Jobs> getQuotationPdfs(@RequestParam(required = false) String quotationpdf) {
        if (quotationpdf != null) {
            return cJobsService.getJobsByQuotationpdf(quotationpdf);
        } else {
            return cJobsService.getJobsWhereQuotationpdfIsNotNull();
        }
    }
//    @GetMapping("/quotationpdf")
//    public List<Jobs> getQuotationPdfs(@RequestParam(required = false) String quotationpdf) {
//        if (quotationpdf != null) {
//            return cJobsService.getJobsByQuotationpdf(quotationpdf);
//        } else {
//            return new ArrayList<>(); // Return an empty list
//        }
//    }

}



