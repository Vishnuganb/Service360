package com.service360.group50.controller;

import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import com.service360.group50.entity.Ads;
import com.service360.group50.service.AdvertiserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@RestController
public class AdvertiserController {

    @Autowired
    private AdvertiserService advertiserService;

//    @Autowired
//    private GoogleDriveService service;
//
////    public String getAllAudio() throws IOException, GeneralSecurityException{
////        return service.getfiles();
////    }
//    public String uploadAudio(MultipartFile file) throws IOException, GeneralSecurityException{
//        System.out.println(file.getOriginalFilename());
//
//        return service.uploadFile(file);
//    }

    @CrossOrigin(origins = "http://localhost:3000/")
    @PostMapping("auth/createAd")
    public Ads createAd(
            @RequestParam("adsImages") MultipartFile[] adsImages,
            @RequestParam("adsName") String adsName,
            @RequestParam("category") String category,
            @RequestParam("price") String price,
            @RequestParam("warrantyMonths") String warrantyMonths,
            @RequestParam("description") String description,
            @RequestParam("area") String area,
            @RequestParam("delivery") String delivery
//                        @RequestParam("VerifyImages") String VerifyImages
    ) {
        Ads ad = new Ads();
        ad.setAdsName(adsName);
        ad.setCategory(category);
        ad.setPrice(price);
        ad.setWarrantyMonths(warrantyMonths);
        ad.setDescription(description);
        ad.setArea(area);
        ad.setDelivery(delivery);
//        ad.setVerifyImages(VerifyImages);
        ad.setStatus("Pending");
        ad.setVerificationStatus("Pending");

        List<String> fileIds = new ArrayList<>();
//
//        for (MultipartFile file : adsImages) {
//            try {
//                String fileId = uploadAudio(file);
//                if (fileId != null) {
//                    fileIds.add(fileId);
//                }
//            } catch (IOException | GeneralSecurityException e) {
//                // Handle any exceptions here
//                e.printStackTrace();
//            }
//        }

        ad.setAdsImages(fileIds.toString());
        return advertiserService.CreateAd(ad);

    }

//        String adsImagesString = "";
//        for (MultipartFile imageFile : adsImages) {
//            try {
//                adsImagesString += saveImageToStorage(imageFile) + ",";
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
//        ad.setAdsImages(adsImagesString);

    private final String uploadDirectory = "src/main/resources/static/images/ads";

    private String saveImageToStorage(MultipartFile imageFile) throws IOException {
        String uniqueFileName = UUID.randomUUID().toString() + "_" + imageFile.getOriginalFilename();

        // Define the path where the image will be saved
        Path uploadPath = Path.of(uploadDirectory);
        Path filePath = uploadPath.resolve(uniqueFileName);

        // Ensure the upload directory exists, create it if necessary
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Copy the image file to the specified path
        Files.copy(imageFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        // Return the path where the image is saved
        return uniqueFileName;
    }

    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping("auth/getAds")
    public List<Ads> getAds() {
        System.out.println("getAds");
        return advertiserService.getAds();
    }

    // 1065961229020-92ijhag3rvcpm6vncuh347dcaasm7fem.apps.googleusercontent.com
    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping("auth/getAdImages/{adId}")
    public ResponseEntity<List<UrlResource>> getImages(@PathVariable Long adId) throws FileNotFoundException {

        List<UrlResource> imageResources = new ArrayList<>();

        Path uploadPath = Path.of(uploadDirectory);
        String imageName = advertiserService.getAdsImages(adId);

        try {
            Path filePath = uploadPath.resolve(imageName);
            UrlResource imageResource = new UrlResource(filePath.toUri());
            imageResources.add(imageResource);
        } catch (MalformedURLException e) {
            throw new FileNotFoundException("Image not found");
        }

        if (imageResources.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(imageResources);
    }


}