package com.service360.group50.service;

import com.service360.group50.dto.ServiceWithCategoryDTO;
import com.service360.group50.entity.ServiceCategory;
import com.service360.group50.entity.Services;
import com.service360.group50.repo.ServiceCategoryRepository;
import com.service360.group50.repo.ServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StreamUtils;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminService {


    private final ServiceCategoryRepository serviceCategoryRepository;
    private final ServiceRepository serviceRepository;

    public ServiceCategory addNewServiceCategory( String serviceCategoryName, MultipartFile file) {

        ServiceCategory serviceCategory = new ServiceCategory();

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        if(fileName.contains(".."))
        {
            System.out.println("not a a valid file");
        }

        try {
            byte[] fileBytes = file.getBytes();
            serviceCategory.setCategoryImage(fileBytes);
        } catch (Exception e) {
            e.printStackTrace();
        }

        serviceCategory.setServiceCategoryName(serviceCategoryName);

        return  serviceCategoryRepository.save(serviceCategory);

    }

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

            System.out.println ( "existingCategory = " + existingCategory );

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

    public List<ServiceWithCategoryDTO> getAllServicesWithCategories() {
        List<Services> services = serviceRepository.findAll();

        return services.stream().map(service -> {
            ServiceWithCategoryDTO dto = new ServiceWithCategoryDTO();
            dto.setId(service.getServiceid()); // Use the correct field name
            dto.setServiceImage(service.getServiceImage());
            dto.setService (service.getServiceName());
            dto.setCategory(service.getServiceCategory().getServiceCategoryName());
            dto.setCategoryImage(service.getServiceCategory().getCategoryImage());
            return dto;
        }).collect(Collectors.toList());
    }

}
