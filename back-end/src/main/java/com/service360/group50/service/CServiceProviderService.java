package com.service360.group50.service;

import com.service360.group50.entity.CServiceProviderDetails;
import com.service360.group50.repo.CServiceProviderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CServiceProviderService {
    private final CServiceProviderRepo cServiceProviderRepo;

    @Autowired
    public CServiceProviderService(CServiceProviderRepo cServiceProviderRepo) {
        this.cServiceProviderRepo = cServiceProviderRepo;
    }

    public List<CServiceProviderDetails> getAllDetails() {
        try {
            List<CServiceProviderDetails> cServiceProviderDetails=cServiceProviderRepo.findAll();
            return cServiceProviderDetails;
        } catch (Exception e) {
            // You can log the exception or handle it in a way that makes sense for your application
            throw new RuntimeException("Failed to fetch service provider details", e);
        }
    }

}
