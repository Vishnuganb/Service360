package com.service360.group50.controller;

import com.service360.group50.dto.AdsDTO;
import com.service360.group50.dto.AdvertiserDTO;
import com.service360.group50.dto.ImagesDTO;
import com.service360.group50.entity.Ads;
import com.service360.group50.entity.Advertiser;
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
@CrossOrigin(origins = "http://localhost:3000")
public class AdvertiserController {

    @Autowired
    private AdvertiserService advertiserService;

    @Autowired
    private ImageService imageService;

    @Autowired
    private UserService userService;




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
                ad.setUser(userService.getUser(userId));

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
        return null;
    }


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


    @GetMapping("auth/getAds/{userId}")
    public AdsDTO getAdsByUserId(@PathVariable Long userId)  {

        // advertiserDTO
        AdvertiserDTO advertiserDTO = new AdvertiserDTO();
        advertiserDTO.setAdvertiserid(advertiserService.getAdvertiserByUserId(userId).getAdvertiserid());
        advertiserDTO.setShopname(advertiserService.getAdvertiserByUserId(userId).getShopname());
        advertiserDTO.setShopaddress(advertiserService.getAdvertiserByUserId(userId).getShopaddress());
        System.out.println(advertiserDTO);

        List<Ads> ads = advertiserService.getAdsByUserId(userId);
        System.out.println(ads);
        AdsDTO adsDTO = new AdsDTO();
        adsDTO.setAdvertiser(advertiserDTO);
        adsDTO.setAds(ads);

        List<ImagesDTO> imagesDTO = new ArrayList<>();
        for (Ads ad : ads) {
            List<byte[]> adsimages = new ArrayList<>();

            try {
                List<byte[]> adsImages = getImages(ad.getAdsId());
                for (byte[] adsImage : adsImages) {
                    adsimages.add(adsImage);
                }


                ImagesDTO image = new ImagesDTO();
                image.setId(ad.getAdsId());
                image.setImages(adsimages);
                imagesDTO.add(image);


            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        adsDTO.setAdsImages(imagesDTO);


        return adsDTO;
    }




//    @GetMapping("auth/getAds")
//    public List<Ads> getAds()  {
//        return advertiserService.getAds();
//    }


    @GetMapping("auth/getAd/{adsId}")
    public Ads getAd(@PathVariable Long adsId)  {
        return advertiserService.getAd(adsId);
    }



//    @GetMapping("auth/getAdImages/{adsId}")
//    public ResponseEntity<byte[]> getImage(@PathVariable Long adsId) throws IOException {
//        String imageDirectory = "src/main/resources/static/images/ads";
//
//
//        String[] imageNames = advertiserService.getAdsImages(adsId).split(",");
////        imageNames = adImages.split(",");
//        List<byte[]> imageBytesList = new ArrayList<>();
//
//        for (String imageName : imageNames) {
//            byte[] imageBytes = imageService.getImage(imageDirectory, imageName);
//            imageBytesList.add(imageBytes);
//
//        }
////        System.out.println(imageBytesList);
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.IMAGE_PNG); // Adjust the content type as needed
//
//        // Assuming you want to return all images as a single byte array
//        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
//        for (byte[] imageBytes : imageBytesList) {
//            outputStream.write(imageBytes);
//        }
//        return new ResponseEntity<>(outputStream.toByteArray(), headers, HttpStatus.OK);
//
//    }


//    @GetMapping("auth/getAdImagesby/{adsId}")
    public List<byte[]> getImages(@PathVariable Long adsId) throws IOException {
        String imageDirectory = "src/main/resources/static/images/ads";


        String[] imageNames = advertiserService.getAdsImages(adsId).split(",");
//        imageNames = adImages.split(",");
        List<byte[]> imageBytesList = new ArrayList<>();

        for (String imageName : imageNames) {
            byte[] imageBytes = imageService.getImage(imageDirectory, imageName);
            imageBytesList.add(imageBytes);

        }
        System.out.println(imageBytesList);

        return imageBytesList;

    }



    @DeleteMapping("auth/deleteAd/{adsId}")
    public void deleteAd(@PathVariable Long adsId){
        advertiserService.deleteAds(adsId);
    }


    @PutMapping("auth/disable/{adsId}")
    public void setStatusDisabled(@PathVariable Long adsId){
        advertiserService.setStatusDisabled(adsId);
    }


    @PutMapping("auth/enable/{adsId}")
    public void setStatusEnabled(@PathVariable Long adsId){
        advertiserService.setStatusEnabled(adsId);
    }


}