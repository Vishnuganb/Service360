package com.service360.group50.service;


import com.service360.group50.auth.AuthenticationRequest;
import com.service360.group50.auth.AuthenticationResponse;
import com.service360.group50.auth.CustomerRegisterRequest;
import com.service360.group50.config.JwtService;
import com.service360.group50.entity.Customers;
import com.service360.group50.entity.Role;
import com.service360.group50.repo.CustomersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final CustomersRepository customersRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse customerRegister ( CustomerRegisterRequest request ) {
        var customer = Customers.builder ( )
                .firstname ( request.getFirstname () )
                .lastname ( request.getLastname ( ) )
                .phonenumber ( request.getPhonenumber ( ) )
                .address ( request.getAddress ( ) )
                .email ( request.getEmail ( ) )
                .nic ( request.getNic ( ) )
                .password ( passwordEncoder.encode ( request.getPassword ( ) ) )
                .role ( Role.CUSTOMER )
                .build ( );

        customersRepository.save ( customer );

        var jwtToken = jwtService.generateToken ( customer );
        return AuthenticationResponse.builder ( )
                .token ( jwtToken )
                .build ( );
    }

    public AuthenticationResponse login ( AuthenticationRequest request ) {
        authenticationManager.authenticate (
                new UsernamePasswordAuthenticationToken (
                        request.getEmail ( ),
                        request.getPassword ( )
                )
        );

        var customer = customersRepository.findByEmail ( request.getEmail ( ) )
                .orElseThrow ( () -> new RuntimeException ( "User not found" ) );

        var jwtToken = jwtService.generateToken ( customer );
        return AuthenticationResponse.builder ( )
                .token ( jwtToken )
                .build ( );
    }

    public Object getUserDetails ( String email ) {
        return customersRepository.findByEmail ( email )
                .orElseThrow ( () -> new RuntimeException ( "User not found" ) );
    }
}
