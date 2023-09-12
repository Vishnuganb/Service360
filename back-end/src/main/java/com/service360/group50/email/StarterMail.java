package com.service360.group50.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class StarterMail {
    @Autowired
    private JavaMailSender javaMailSender;

    public void TrainingSessionInvitation(String recipientEmail) {
        // Create a SimpleMailMessage object
        SimpleMailMessage message = new SimpleMailMessage();

        // Set the sender's email address
        message.setFrom("service.360.50@gmail.com");

        // Set the recipient's email address
        message.setTo(recipientEmail);

        // Set the subject of the email
        message.setSubject("Hello from Spring Boot");

        // Set the content of the email
        message.setText("Hi, this is a test email sent from Spring Boot.");

        // Send the email
        javaMailSender.send(message);
    }

}
