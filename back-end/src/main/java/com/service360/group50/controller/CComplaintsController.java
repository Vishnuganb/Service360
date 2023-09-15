package com.service360.group50.controller;
import com.service360.group50.entity.Complaints;
import com.service360.group50.service.CComplaintsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class CComplaintsController {
    private final CComplaintsService cComplaintsService;

    @PostMapping("/createcomplaints")
    public Complaints createcomplaints(@RequestBody Complaints newComplaints) {
        return cComplaintsService.createcomplaints(newComplaints);
    }

    @GetMapping("/viewcomplaints")
    public List<Complaints> ViewComplaints() {
        return cComplaintsService.viewcomplaints();
    }

    @DeleteMapping("/deletecomplaints/{id}") // Fixed the URL mapping
    public String deleteJobs(@PathVariable Long id) {
        return cComplaintsService.deleteJobsById(id); // Use the service method
    }

}
