package com.service360.group50.dto;


import com.service360.group50.entity.Status;
import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class MessageDTO {
    private String senderId;  // sender Email
    private String receiverId; // receiver Email
    private String message;
    private Status status;
}