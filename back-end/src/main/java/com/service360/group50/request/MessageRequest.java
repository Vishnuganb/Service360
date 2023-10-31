package com.service360.group50.request;

public class MessageRequest {
    private Long senderId;
    private Long receiverId;
    private String message;

    public Long getSenderId() {
        return senderId;
    }

    public Long getReceiverId() {
        return receiverId;
    }

    public String getMessage() {
        return message;
    }
}
