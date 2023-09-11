package com.service360.group50.service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class ImageService {

    public String saveImageToStorage(String uploadDirectory, MultipartFile imageFile) throws IOException {
        String uniqueFileName = UUID.randomUUID().toString() + "_" + imageFile.getOriginalFilename();


        Path uploadPath = Path.of(uploadDirectory);
        Path filePath = uploadPath.resolve(uniqueFileName);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        Files.copy(imageFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return uniqueFileName;
    }


    public byte[] getImage(String imageDirectory, String imageName) throws IOException {
        // Construct the full path to the image
        Path imagePath = Path.of(imageDirectory, imageName);

        // Check if the image file exists
        if (Files.exists(imagePath)) {
            // Read the image bytes
            byte[] imageBytes = Files.readAllBytes(imagePath);
            return imageBytes;
        } else {
            // If the image does not exist, return null or throw an exception
            return null; // You can also throw an exception here if needed
        }
    }

}
