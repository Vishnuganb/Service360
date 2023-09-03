package com.service360.group50.config;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.FileContent;
import com.google.api.client.http.HttpTransport;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.model.File;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.security.GeneralSecurityException;

import static com.service360.group50.service.GoogleDriveService.JSON_FACTORY;

@Configuration
public class GoogleDriveConfig {

    @Bean
    public Drive driveService() throws IOException, GeneralSecurityException {
        // Initialize the HTTP transport and create the Drive service
        HttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
        return new Drive.Builder(httpTransport, JSON_FACTORY, null)
                .setApplicationName("Your Application Name")
                .build();
    }
}
