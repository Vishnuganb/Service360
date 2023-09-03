//package com.service360.group50.controller;
//
//import java.io.IOException;
//import java.security.GeneralSecurityException;
//
//import com.service360.group50.service.GoogleDriveService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import org.springframework.web.multipart.MultipartFile;
//
//
//@Component
//public class AudioBookController {
//
//    @Autowired
//    private GoogleDriveService service;
//
//    public String getAllAudio() throws IOException, GeneralSecurityException{
//        return service.getfiles();
//    }
//    public String uploadAudio(MultipartFile file) throws IOException, GeneralSecurityException{
//        System.out.println(file.getOriginalFilename());
//
//        return service.uploadFile(file);
//    }
//
//}