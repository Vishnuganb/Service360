package com.service360.group50.dto;

public class ChatMessageDTO {

    private Long SenderId;
    private Long ReceiverId;
    private String message;
    private String timestamp;

    public ChatMessageDTO() {
        SenderId = SenderId;
        ReceiverId = ReceiverId;
        this.message = message;
        this.timestamp = timestamp;
    }

    public Long getSenderId() {
        return SenderId;
    }

    public void setSenderId(Long senderId) {
        SenderId = senderId;
    }

    public Long getReceiverId() {
        return ReceiverId;
    }

    public void setReceiverId(Long receiverId) {
        ReceiverId = receiverId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}
