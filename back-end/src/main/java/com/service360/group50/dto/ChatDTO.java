package com.service360.group50.dto;

public class ChatDTO {

    private String Name;
    private String Email;
    private String LastMessage;

    private Long userId;

    private String profilePic;

    public ChatDTO() {
        Name = Name;
        Email = Email;
        LastMessage = LastMessage;
        this.userId = userId;
        this.profilePic = profilePic;
    }

    public String getName() {
        return Name;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getLastMessage() {
        return LastMessage;
    }

    public void setLastMessage(String lastMessage) {
        LastMessage = lastMessage;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
