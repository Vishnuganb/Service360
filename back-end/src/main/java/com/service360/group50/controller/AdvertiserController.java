package com.service360.group50.controller;

import com.service360.group50.dto.UsersDTO;
import com.service360.group50.entity.Ads;
import com.service360.group50.entity.Users;
import com.service360.group50.message.ResponseMessage;
import com.service360.group50.service.AdvertiserService;
import com.service360.group50.service.ImageService;
import com.service360.group50.service.UserService;
import lombok.RequiredArgsConstructor;
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
public class AdvertiserController {

    @Autowired
    private AdvertiserService advertiserService;

    @Autowired
    private ImageService imageService;

    @Autowired
    private UserService userService;


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("auth/createAd")
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
    ) {
        String uploadDirectory = "src/main/resources/static/images/ads";
        if (role.equals("ADVERTISER")) {
            UsersDTO usersDTO = userService.getUserById(userId);
            if (usersDTO != null) {
                Users user = new Users();
                user.setUserid(usersDTO.getUserid());
                user.setFirstname(usersDTO.getFirstname());
                user.setLastname(usersDTO.getLastname());
                user.setPhonenumber(usersDTO.getPhonenumber());
                user.setAddress(usersDTO.getAddress());
                user.setEmail(usersDTO.getEmail());
                user.setNic(usersDTO.getNic());
                user.setProfilePic(usersDTO.getProfilePic());
                user.setPassword(usersDTO.getPassword());
                // Set other user properties as needed

                Ads ad = new Ads();
                ad.setAdsName(adsName);
                ad.setCategory(category);
                ad.setPrice(price);
                ad.setWarrantyMonths(warrantyMonths);
                ad.setDescription(description);
                ad.setArea(area);
                ad.setDelivery(delivery);
                ad.setStatus("Active");
                ad.setVerificationStatus("Pending");
                ad.setUser(user);

                String adsImagesString = "";
                for (MultipartFile imageFile : adsImages) {
                    try {
                        adsImagesString += imageService.saveImageToStorage(uploadDirectory, imageFile) + ",";
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
                ad.setAdsImages(adsImagesString);
                System.out.println("Hello" + ad);
                return advertiserService.CreateAd(ad);
            }
        }
        return null;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("auth/updateAd")
    public Ads updateAd(
            @RequestParam(value = "adsImages",required = false) MultipartFile[] adsImages,
            @RequestParam(value = "adsName",required = false) String adsName,
            @RequestParam(value = "category",required = false) String category,
            @RequestParam(value = "price",required = false) String price,
            @RequestParam(value = "warrantyMonths",required = false) String warrantyMonths,
            @RequestParam(value = "description",required = false) String description,
            @RequestParam(value = "area",required = false) String area,
            @RequestParam(value = "delivery",required = false) String delivery,
            @RequestParam("role") String role,
            @RequestParam("userId") Long userId,
            @RequestParam("adsId") Long adsId
    ){
        if(role.equals("ADVERTISER")) {

//                String uploadDirectory = "src/main/resources/static/images/ads";
            Ads ad = advertiserService.getAd(adsId);
            if(adsName != null){
                ad.setAdsName(adsName);
            }

            if(category != null){
                ad.setCategory(category);
            }

            if(price != null){
                ad.setPrice(price);
            }

            if(warrantyMonths != null){
                ad.setWarrantyMonths(warrantyMonths);
            }

            if(description != null){
                ad.setDescription(description);
            }

            if(area != null){
                ad.setArea(area);
            }

            if(delivery != null){
                ad.setDelivery(delivery);
            }



//                String adsImagesString = "";
//                for (MultipartFile imageFile : adsImages) {
//                    try {
//                        adsImagesString += imageService.saveImageToStorage(uploadDirectory,imageFile) + ",";
//                    } catch (IOException e) {
//                        e.printStackTrace();
//                    }
//                }
//                ad.setAdsImages(adsImagesString);
            return advertiserService.updateAd(ad);
//                return ResponseEntity.status( HttpStatus.OK).body(new ResponseMessage("Ad updated successfully"));

        }

        return null;
//        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage("Ad could not be updated"));
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("auth/getAds")
    public List<Ads> getAds()  {
        return advertiserService.getAds();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("auth/getAd/{adsId}")
    public Ads getAd(@PathVariable Long adsId)  {
//        Long AdvertiserID = advertiserService.getAdvertiserIdByUserId(userId);
        return advertiserService.getAd(adsId);
    }



    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("auth/getAdImages/{adsId}")
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

    // delete ad
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("auth/deleteAd/{adsId}")
    public void deleteAd(@PathVariable Long adsId){
        advertiserService.deleteAds(adsId);
    }

    // set status Disabled by adsId
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("auth/setStatusDisabled/{adsId}")
    public void setStatusDisabled(@PathVariable Long adsId){
        advertiserService.setStatusDisabled(adsId);
    }

    // set status Enabled by adsId
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("auth/setStatusEnabled/{adsId}")
    public void setStatusEnabled(@PathVariable Long adsId){
        advertiserService.setStatusEnabled(adsId);
    }


}