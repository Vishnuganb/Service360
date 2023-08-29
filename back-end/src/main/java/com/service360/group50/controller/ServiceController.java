package com.service360.group50.controller;

import com.service360.group50.dto.ServiceWithCategoryDTO;
import com.service360.group50.entity.Services;
import com.service360.group50.entity.ServiceCategory;
import com.service360.group50.message.ResponseMessage;
import com.service360.group50.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class ServiceController {

    public final AdminService adminService;

    @PostMapping("/addNewServiceCategory")
    public ServiceCategory addNewServiceCategory(
            @RequestParam("image") MultipartFile image,
            @RequestParam("serviceCategoryName") String serviceCategoryName
    ) {
       return adminService.addNewServiceCategory ( serviceCategoryName, image ) ;
    }

    @PostMapping("/addNewService")
    public ResponseEntity<ResponseMessage> addNewService(
            @RequestParam("serviceImage") MultipartFile serviceImage,
            @RequestParam("serviceName") String serviceName,
            @RequestParam("serviceCategoryName") String serviceCategoryName
    ) {
            try {
                adminService.addNewService(serviceCategoryName, serviceName, serviceImage);
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("Service added successfully"));
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage("Service could not be added"));
            }
    }

    @PostMapping("/addNewServiceWithCategoryImage")
    public ResponseEntity<ResponseMessage> addNewServiceWithCategoryImage(
            @RequestParam("serviceImage") MultipartFile serviceImage,
            @RequestParam("categoryImage") MultipartFile categoryImage,
            @RequestParam("serviceName") String serviceName,
            @RequestParam("serviceCategoryName") String serviceCategoryName
    ) {
        try {
            adminService.addNewServiceWithCategoryImage(serviceCategoryName, serviceName, serviceImage, categoryImage);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("Service Category with Service added successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage("Service Category with Service could not be added"));
        }
    }

    @GetMapping("/allServices")
    public ResponseEntity<List<ServiceWithCategoryDTO>> getAllServicesWithCategories() {
        List<ServiceWithCategoryDTO> services =  adminService.getAllServicesWithCategories();
        return new ResponseEntity<> (services, HttpStatus.OK);
    }


}
