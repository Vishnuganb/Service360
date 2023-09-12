package com.service360.group50.email;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

@Component
public class StarterMail {
    @Autowired
    private QRCodeGenerator qrCodeGenerator;
    @Autowired
    private JavaMailSender javaMailSender;

    public void TrainingSessionInvitation(String recipientEmail, String qrCodeContent) throws Exception {
        // Generate the QR code as a byte array
        byte[] qrCodeBytes = qrCodeGenerator.generateQRCode(qrCodeContent, 500, 500);

        // Create a SimpleMailMessage object
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        // Set the sender's email address
        helper.setFrom("service.360.50@gmail.com");

        // Set the recipient's email address
        helper.setTo(recipientEmail);

        // Set the subject of the email
        helper.setSubject("Training Session QR Code");

        // Set the content of the email
        helper.setText("Hi, here's your unique QR code for the training session.");

        // Attach the QR code as an attachment
        helper.addAttachment("qrcode.png", new ByteArrayResource(qrCodeBytes));

        // Send the email
        javaMailSender.send(message);
    }

}
