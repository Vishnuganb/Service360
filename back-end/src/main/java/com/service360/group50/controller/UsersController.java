package com.service360.group50.controller;

import com.service360.group50.dto.UsersDTO;
import com.service360.group50.entity.SystemReview;
import com.service360.group50.entity.Users;
import com.service360.group50.message.ResponseMessage;
import com.service360.group50.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class UsersController {

    private final UserService userService;

    @PutMapping("/updateUser")
    public ResponseEntity<ResponseMessage> updateUser(
            @RequestParam(value = "userId") Long userId,
            @RequestParam(value = "firstName", required = false) String firstName,
            @RequestParam(value = "lastName", required = false) String lastName,
            @RequestParam(value = "password", required = false) String password,
            @RequestParam(value = "phoneNumber", required = false) String phoneNumber,
            @RequestParam(value = "address", required = false) String address,
            @RequestParam(value = "nic", required = false) String nic,
            @RequestParam(value = "profilePic", required = false) String profilePic
    ) {
        try {
            userService.updateUser(userId, firstName, lastName, password, phoneNumber, address, nic, profilePic);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("User updated successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage("User could not be updated"));
        }
    }

    @GetMapping("/getUserById/{userId}")
    public UsersDTO getUserById(@PathVariable Long userId) {
        return userService.getUserById(userId);
    }




    @PostMapping("/addSystemReview")
    public SystemReview addSystemReview(
            @RequestParam("userid") Long userid,
            @RequestParam("review") String review,
            @RequestParam("rating") int rating) {
        // Retrieve the authentication object
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

//        if (authentication != null && authentication.getPrincipal() instanceof Users) {
//            Users authenticatedUser = (Users) authentication.getPrincipal();
//            String profilePicturePath = authenticatedUser.getProfilePic();
            // Assuming this method retrieves the file path

//            try {
//                // Load the image file and convert it to a byte array
//                Path profilePictureFilePath = Paths.get(profilePicturePath);
//                byte[] profilePictureData = Files.readAllBytes(profilePictureFilePath);

                // Now you can use authenticatedUser.getUserId() to get userId and profilePictureData to create the review
                return userService.addSystemReview(userid, review, rating);

//            catch (IOException e) {
//
//                return null;
//            }
//        } else {
//
//            return null;
//        }
    }

    @GetMapping("/getSystemReviews/{userId}")
    public List<SystemReview> getSystemReviews(@PathVariable Long userId) {
        return userService.getSystemReviews(userId);
    }
}
