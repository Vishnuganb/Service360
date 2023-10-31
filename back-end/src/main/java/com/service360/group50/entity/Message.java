package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "Message"
)
public class Message {

    @Id
    @GeneratedValue
    private Long messageId;

    private String message;
    private LocalDateTime timestamp;

    @ManyToOne
    @JoinColumn(name = "senderId")
    private Users sender;


    @ManyToOne
    @JoinColumn(name = "receiverId")
    private Users receiver;

    @PrePersist
    protected void onCreate()  {
        timestamp =  LocalDateTime.now();
    }

}
