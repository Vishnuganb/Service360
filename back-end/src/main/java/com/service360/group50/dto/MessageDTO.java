package com.service360.group50.dto;


import com.service360.group50.entity.Status;
import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class MessageDTO {
    private String senderName;  // sender Email
    private String receiverName; // receiver Email
    private String message;
    private String date;
    private Status status;
}