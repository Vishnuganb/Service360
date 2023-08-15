package com.service360.group50.controller;

import com.service360.group50.auth.AuthenticationRequest;
import com.service360.group50.auth.AuthenticationResponse;
import com.service360.group50.auth.CustomerRegisterRequest;
import com.service360.group50.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class LoginController {

    private final LoginService loginService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signup/customer")
    public ResponseEntity<AuthenticationResponse> customerRegister( @RequestBody CustomerRegisterRequest request) {
        System.out.println ( "request = " + request );

        return ResponseEntity.ok ( loginService.customerRegister ( request ) );

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login( @RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok ( loginService.login ( request ) );
    }

    @CrossOrigin(origins = "http://localhost:3000")
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
