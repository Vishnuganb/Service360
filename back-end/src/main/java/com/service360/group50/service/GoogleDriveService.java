//package com.service360.group50.service;
//
//import com.google.api.client.http.InputStreamContent;
//import com.google.api.client.http.javanet.NetHttpTransport;
//import com.google.api.client.json.JsonFactory;
//import com.google.api.client.json.gson.GsonFactory;
//import com.google.api.services.drive.Drive;
//import com.google.api.services.drive.model.File;
//import com.google.api.services.drive.model.FileList;
//import org.springframework.stereotype.Component;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.ByteArrayInputStream;
//import java.io.IOException;
//import java.util.Collections;
//import java.util.List;
//
//@Component
//public class GoogleDriveService {
//
//    private static final String APPLICATION_NAME = "Service360";
//    public static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
//
//    private static final String API_KEY = "AIzaSyBGnJNyNL8BYXCmV7mkW8T9lYgYwbP2CYg"; // Replace with your actual API key
//    private static final NetHttpTransport HTTP_TRANSPORT = new NetHttpTransport(); // Add this line
//
//    private Drive getInstance() throws IOException {
//        return new Drive.Builder(
//                HTTP_TRANSPORT,
//                JSON_FACTORY,
//                httpRequestInitializer -> {
//                    httpRequestInitializer.initializeRequest(httpRequest -> {
//                        // Set the API key as an HTTP request header
//                        httpRequest.getHeaders().set("Authorization", "Bearer " + API_KEY);
//                    });
//                })
//                .setApplicationName(APPLICATION_NAME)
//                .build();
//    }
//
//    public String getFiles() throws IOException {
//        Drive service = getInstance();
//        FileList result = service.files().list().setPageSize(10).execute();
//        List<File> files = result.getFiles();
//        return files == null || files.isEmpty() ? "No files found." : files.toString();
//    }
//
//    public String uploadFile(MultipartFile file) {
//        try {
//            String folderId = "Service360";
//            if (file != null) {
//                File fileMetadata = new File();
//                fileMetadata.setParents(Collections.singletonList(folderId));
//                fileMetadata.setName(file.getOriginalFilename());
//                File uploadFile = getInstance().files().create(fileMetadata, new InputStreamContent(
//                                file.getContentType(),
//                                new ByteArrayInputStream(file.getBytes())))
//                        .setFields("id").execute();
//                return uploadFile.getId();
//            }
//        } catch (Exception e) {
//            System.out.println("Error: " + e);
//        }
//        return null;
//    }
//}
