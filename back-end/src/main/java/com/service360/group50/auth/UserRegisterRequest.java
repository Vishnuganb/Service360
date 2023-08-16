package com.service360.group50.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisterRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String phonenumber;
    private String address;
    private String nic;
}
