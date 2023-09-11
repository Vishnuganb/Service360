package com.service360.group50.controller;

import com.service360.group50.entity.Ads;
import com.service360.group50.service.AdvertiserService;
import com.service360.group50.service.ImageService;
import com.service360.group50.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("auth")
@CrossOrigin(origins = "http://localhost:3000/")
public class AdvertiserController {

    @Autowired
    private AdvertiserService advertiserService;

    @Autowired
    private ImageService imageService;

    @Autowired
    private UserService userService;



    @PostMapping("/createAd")
    public Ads createAd(
            @RequestParam("adsImages") MultipartFile[] adsImages,
            @RequestParam("adsName") String adsName,
            @RequestParam("category") String category,
            @RequestParam("price") String price,
            @RequestParam("warrantyMonths") String warrantyMonths,
            @RequestParam("description") String description,
            @RequestParam("area") String area,
            @RequestParam("delivery") String delivery,
            @RequestParam("role") String role,
            @RequestParam("userId") Long userId
//                        @RequestParam("VerifyImages") String VerifyImages
    ) {
        String uploadDirectory = "src/main/resources/static/images/ads";
        if(role.equals("ADVERTISER")){

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
//        ad.setUser(userService.getUserById(userId));


                String adsImagesString = "";
        for (MultipartFile imageFile : adsImages) {
            try {
                adsImagesString += imageService.saveImageToStorage(uploadDirectory,imageFile) + ",";
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        ad.setAdsImages(adsImagesString);
            System.out.println("Hello"+ad);
        return advertiserService.CreateAd(ad);
        }

        return null;

    }



    @GetMapping("/getAds")
    public List<Ads> getAds()  {
        System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");
        System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");
        System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");
        System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");
        System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");System.out.println("Hello");

//        System.out.println(advertiserService.getAds());
//        return advertiserService.getAds();
        return advertiserService.getAdsByUserId(1L);
    }

//    @GetMapping("/getAd/{adsId}")
//    public Ads getAd(@PathVariable Long adsId)  {
////        Long AdvertiserID = advertiserService.getAdvertiserIdByUserId(userId);
//        return advertiserService.getAd(adsId);
//    }




    @GetMapping("/getAdImages/{adsId}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long adsId) throws IOException {
        String imageDirectory = "src/main/resources/static/images/ads";
        String[] imageNames = advertiserService.getAdsImages(adsId).split(",");
//        imageNames = adImages.split(",");
        List<byte[]> imageBytesList = new ArrayList<>();

        for (String imageName : imageNames) {
            byte[] imageBytes = imageService.getImage(imageDirectory, imageName);
            imageBytesList.add(imageBytes);

        }
        System.out.println(imageBytesList);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_PNG); // Adjust the content type as needed

        // Assuming you want to return all images as a single byte array
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        for (byte[] imageBytes : imageBytesList) {
            outputStream.write(imageBytes);
        }

        return new ResponseEntity<>(outputStream.toByteArray(), headers, HttpStatus.OK);
    }


}