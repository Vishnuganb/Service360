package com.service360.group50.controller;

import com.service360.group50.auth.*;
import com.service360.group50.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/signup/customer")
    public ResponseEntity<AuthenticationResponse> customerRegister( @RequestBody UserRegisterRequest request) {
        return ResponseEntity.ok ( loginService.customerRegister ( request ) );

    }

    @PostMapping("/signup/advertiser")
    public ResponseEntity<AuthenticationResponse> advertiserRegister(
            @RequestBody UserRegisterRequest request
    ) {
        return ResponseEntity.ok(loginService.advertiserRegister(request));
    }
    @PostMapping("/signup/serviceprovider")
    public ResponseEntity<AuthenticationResponse> serviceProviderRegister(
            @RequestBody UserRegisterRequest request
    ) {
        return ResponseEntity.ok(loginService.serviceProviderRegister(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login( @RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok ( loginService.login ( request) );
    }

    @GetMapping("/login/{email}")
    public ResponseEntity<UserDetails> getUserDetailsByEmail(@PathVariable String email) {
        UserDetails userDetails = (UserDetails) loginService.getUserDetails(email);
        if (userDetails != null) {
            return ResponseEntity.ok(userDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
