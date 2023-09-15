package com.service360.group50.service;
import com.service360.group50.entity.Complaints;
import com.service360.group50.repo.CComplaintsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CComplaintsService {
    @Autowired

    private CComplaintsRepository cComplaintsRepository;

    public Complaints createcomplaints (Complaints newComplaints) {
        return this.cComplaintsRepository.save(newComplaints);
    }

    public List<Complaints> viewcomplaints() {
        return this.cComplaintsRepository.findAll();
    }

    public String deleteJobsById(Long complaintid) {
        cComplaintsRepository.deleteById(complaintid);
        return "Job deleted successfully";
    }
}
