package com.service360.group50.service;

import com.service360.group50.dto.CategoryDTO;
import com.service360.group50.dto.ServiceCategoryDTO;
import com.service360.group50.dto.ServiceWithCategoryDTO;
import com.service360.group50.entity.*;
import com.service360.group50.repo.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StreamUtils;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminService {


    private final ServiceCategoryRepository serviceCategoryRepository;
    private final ServiceRepository serviceRepository;
    private final TrainingSessionRepository trainingSessionRepository;
    private final AdsRepository adsRepository;
    private final SystemReviewRepository systemReviewRepository;
    private final CComplaintsRepository cComplaintsRepository;

    public Services addNewService(String serviceCategoryName, String serviceName, MultipartFile serviceImage) {
        try {
            ServiceCategory serviceCategory;

            Optional<ServiceCategory> existingCategory = serviceCategoryRepository.findByServiceCategoryName(serviceCategoryName);

            if (existingCategory.isPresent()) {
                serviceCategory = existingCategory.get();
            } else {
                serviceCategory = ServiceCategory.builder()
                        .serviceCategoryName(serviceCategoryName)
                        .build();
                serviceCategoryRepository.save(serviceCategory);
            }

            String fileName = StringUtils.cleanPath(serviceImage.getOriginalFilename());

            if (fileName.contains("..")) {
                System.out.println("Not a valid serviceImage");
                return null;
            }

            // Load the image as an InputStream
            try (InputStream imageStream = new ByteArrayInputStream(serviceImage.getBytes())) {

                byte[] imageBytes = StreamUtils.copyToByteArray(imageStream);
                var service = Services.builder()
                        .serviceName(serviceName)
                        .serviceCategory(serviceCategory)
                        .serviceImage(imageBytes)
                        .build();


                service = serviceRepository.save(service);

                return service;
            } catch (IOException e) {
                e.printStackTrace();
                return null; // Handle the exception appropriately
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null; // Handle the exception appropriately
        }
    }


    public Services addNewServiceWithCategoryImage(String serviceCategoryName, String serviceName, MultipartFile serviceImage, MultipartFile categoryImage) {
        try {
            ServiceCategory serviceCategory;

            Optional<ServiceCategory> existingCategory = serviceCategoryRepository.findByServiceCategoryName(serviceCategoryName);

            if (existingCategory.isPresent()) {
                serviceCategory = existingCategory.get();
            } else {

                byte[] categoryImageBytes = categoryImage.getBytes();

                serviceCategory = ServiceCategory.builder()
                        .serviceCategoryName(serviceCategoryName)
                        .categoryImage(categoryImageBytes)
                        .build();
                serviceCategoryRepository.save(serviceCategory);
            }

            String fileName = StringUtils.cleanPath(serviceImage.getOriginalFilename());

            if (fileName.contains("..")) {
                System.out.println("Not a valid serviceImage");
                return null;
            }

            byte[] fileBytes = serviceImage.getBytes();

            // Create the Service entity
            var service = Services.builder()
                    .serviceName(serviceName)
                    .serviceCategory(serviceCategory)
                    .serviceImage(fileBytes)
                    .build();

            return serviceRepository.save(service);
        } catch (Exception e) {
            e.printStackTrace();
            return null; // Handle the exception appropriately
        }
    }

    public Services updateService(long serviceId, String serviceCategoryName, String serviceName, MultipartFile serviceImage , Boolean enable) {
        try {
            Optional<Services> existingServiceOptional = serviceRepository.findById(serviceId);

            if (existingServiceOptional.isEmpty()) {
                System.out.println("Service not found");
                return null;
            }

            Services existingService = existingServiceOptional.get();

            if (enable != null) {
                existingService.setEnable(enable);
            }

            if (serviceName != null) {
                existingService.setServiceName(serviceName);
            }

            if (serviceCategoryName != null) {
                Optional<ServiceCategory> existingCategoryOptional = serviceCategoryRepository.findByServiceCategoryName(serviceCategoryName);

                if (existingCategoryOptional.isEmpty()) {
                    System.out.println("Service category not found");
                    return null;
                }

                ServiceCategory serviceCategory = existingCategoryOptional.get();
                existingService.setServiceCategory(serviceCategory);
            }

            if (serviceImage != null) {
                String fileName = StringUtils.cleanPath(serviceImage.getOriginalFilename());

                if (fileName.contains("..")) {
                    System.out.println("Not a valid serviceImage");
                    return null;
                }

                try (InputStream imageStream = new ByteArrayInputStream(serviceImage.getBytes())) {
                    byte[] imageBytes = StreamUtils.copyToByteArray(imageStream);
                    existingService.setServiceImage(imageBytes);
                } catch (IOException e) {
                    e.printStackTrace();
                    return null;
                }
            }

            existingService = serviceRepository.save(existingService);

            return existingService;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<ServiceWithCategoryDTO> getAllServicesWithCategories() {
        List<Services> services = serviceRepository.findAll();

        return services.stream().map(service -> {
            ServiceWithCategoryDTO dto = new ServiceWithCategoryDTO();
            dto.setId(service.getServiceid());
            dto.setServiceImage(service.getServiceImage());
            dto.setService (service.getServiceName());
            dto.setCategory(service.getServiceCategory().getServiceCategoryName());
            dto.setCategoryImage(service.getServiceCategory().getCategoryImage());
            dto.setEnable(service.getEnable());
            return dto;
        }).collect(Collectors.toList());
    }

    public List<CategoryDTO> getAllServiceCategories() {

        List<ServiceCategory> categories = serviceCategoryRepository.findAll();

        return categories.stream().map(category -> {
            CategoryDTO dto = new CategoryDTO();
            dto.setId(category.getServicecategoryid());
            dto.setServiceCategoryName(category.getServiceCategoryName());
            dto.setCategoryImage(category.getCategoryImage());
            return dto;
        }).collect(Collectors.toList());

    }

    public Map<String, List<String>> getServiceCategoriesWithServices () {

        List<ServiceCategory> categories = serviceCategoryRepository.findAll();
        Map<String, List<String>> serviceAndCategories = new HashMap<> ();

        for (ServiceCategory category : categories) {
            String categoryName = category.getServiceCategoryName();
            List<String> categoryServices = category.getServices().stream()
                    .map(Services::getServiceName)
                    .collect(Collectors.toList());
            serviceAndCategories.put(categoryName, categoryServices);
        }

        return serviceAndCategories;
    }


    public TrainingSession updateTrainingSessionAcceptStatus ( Long trainingid, String status ) {
        Optional<TrainingSession> existingTrainingSessionOptional = trainingSessionRepository.findById ( trainingid );

        if (existingTrainingSessionOptional.isEmpty()) {
            System.out.println("Training session not found");
            return null;
        }

        TrainingSession existingTrainingSession = existingTrainingSessionOptional.get();

        existingTrainingSession.setStatus(status);

        existingTrainingSession = trainingSessionRepository.save(existingTrainingSession);

        return existingTrainingSession;
    }

    public TrainingSession updateTrainingSessionRejectStatus ( Long trainingid, String status, String reason ) {
        Optional<TrainingSession> existingTrainingSessionOptional = trainingSessionRepository.findById ( trainingid );

        if (existingTrainingSessionOptional.isEmpty()) {
            System.out.println("Training session not found");
            return null;
        }

        TrainingSession existingTrainingSession = existingTrainingSessionOptional.get();

        existingTrainingSession.setStatus(status);
        existingTrainingSession.setReason(reason);

        existingTrainingSession = trainingSessionRepository.save(existingTrainingSession);

        return existingTrainingSession;
    }

    public Ads updateAdvertisementAcceptStatus ( Long adsId, String status ) {
        Optional<Ads> existingAdsOptional = adsRepository.findById ( adsId );

        if (existingAdsOptional.isEmpty()) {
            System.out.println("Ads not found");
            return null;
        }

        Ads existingAds = existingAdsOptional.get();

        existingAds.setVerificationStatus (status);

        existingAds = adsRepository.save(existingAds);

        return existingAds;
    }

    public Ads updateAdvertisementRejectStatus ( Long adsId, String status, String reason ) {
        Optional<Ads> existingAdsOptional = adsRepository.findById ( adsId );

        if (existingAdsOptional.isEmpty()) {
            System.out.println("Ads not found");
            return null;
        }

        Ads existingAds = existingAdsOptional.get();

        existingAds.setVerificationStatus(status);
        existingAds.setReason(reason);

        existingAds = adsRepository.save(existingAds);

        return existingAds;
    }

    public SystemReview updateSelectSystemReview ( Long ratingid, String status ) {

        Optional<SystemReview> existingSystemReviewOptional = systemReviewRepository.findById ( ratingid );

        if (existingSystemReviewOptional.isEmpty()) {
            System.out.println("System Review not found");
            return null;
        }

        SystemReview existingSystemReview = existingSystemReviewOptional.get();

        existingSystemReview.setStatus(status);

        existingSystemReview = systemReviewRepository.save(existingSystemReview);

        return existingSystemReview;

    }

    public Complaints updateComplaintStatus ( Long complaintid, String reply, String status ) {

        Optional<Complaints> existingComplaint =  cComplaintsRepository.findById(complaintid);

        if (existingComplaint.isEmpty()) {
            System.out.println("Complaint not found");
            return null;
        }

        Complaints complaint = existingComplaint.get();

        complaint.setReply(reply);
        complaint.setComplaintstatus(status);

        complaint = cComplaintsRepository.save(complaint);

        return complaint;

    }
}
