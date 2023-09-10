package com.service360.group50.service;


import com.service360.group50.auth.AuthenticationRequest;
import com.service360.group50.auth.AuthenticationResponse;
import com.service360.group50.auth.UserRegisterRequest;
import com.service360.group50.config.JwtService;
import com.service360.group50.dto.UsersDTO;
import com.service360.group50.entity.Advertiser;
import com.service360.group50.entity.AdvertiserFiles;
import com.service360.group50.entity.Role;
import com.service360.group50.entity.Users;
import com.service360.group50.repo.AdvertiserFileRepository;
import com.service360.group50.repo.AdvertiserRepository;
import com.service360.group50.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final UserRepository userRepository;
    private final AdvertiserRepository advertiserRepository;
    private final AdvertiserFileRepository advertiserFileRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse customerRegister ( UserRegisterRequest request ) {
        var customer = Users.builder ( )
                .firstname ( request.getFirstname () )
                .lastname ( request.getLastname ( ) )
                .phonenumber ( request.getPhonenumber ( ) )
                .address ( request.getAddress ( ) )
                .email ( request.getEmail ( ) )
                .nic ( request.getNic ( ) )
                .password ( passwordEncoder.encode ( request.getPassword ( ) ) )
                .role ( Role.CUSTOMER )
                .build ( );

        userRepository.save ( customer );

        var jwtToken = jwtService.generateToken ( customer );
        return AuthenticationResponse.builder ( )
                .token ( jwtToken )
                .build ( );
    }

    public AuthenticationResponse advertiserRegister(UserRegisterRequest request, MultipartFile[] files) throws IOException {


        var advertiserUser = Users.builder ( )
                .firstname ( request.getFirstname ( ) )
                .lastname ( request.getLastname ( ) )
                .phonenumber ( request.getPhonenumber ( ) )
                .email ( request.getEmail ( ) )
                .address ( request.getAddress ( ) )
                .nic ( request.getNic ( ) )
                .password ( passwordEncoder.encode ( request.getPassword ( ) ) )
                .role ( Role.ADVERTISER )
                .build ( );

        userRepository.save(advertiserUser);

        System.out.println ( "advertiserUser = " + advertiserUser.getUserid () );

        // Create a new Advertiser instance
        var advertiser = Advertiser.builder()
                .shopname(request.getShopname())
                .shopaddress(request.getShopaddress())
                .users(advertiserUser) // Associate the Advertiser with the Users
                .build();

        advertiserRepository.save(advertiser);

        for (MultipartFile file : files) {
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            AdvertiserFiles advertiserFile = new AdvertiserFiles (fileName, file.getContentType(), file.getBytes(), advertiser);

            advertiserFileRepository.save(advertiserFile);
        }

        var jwtToken = jwtService.generateToken (advertiserUser);
        return AuthenticationResponse.builder ( )
                .token ( jwtToken )
                .build ( );

    }

    public AuthenticationResponse serviceProviderRegister(UserRegisterRequest request) {


        var serviceprovider = Users.builder ( )
                .firstname ( request.getFirstname ( ) )
                .lastname ( request.getLastname ( ) )
                .phonenumber ( request.getPhonenumber ( ) )
                .email ( request.getEmail ( ) )
                .nic ( request.getNic ( ) )
                .password ( passwordEncoder.encode ( request.getPassword ( ) ) )
                .role ( Role.SERVICEPROVIDER )
                .build ( );

        userRepository.save(serviceprovider);

        var jwtToken = jwtService.generateToken ( serviceprovider);
        return AuthenticationResponse.builder ( )
                .token ( jwtToken )
                .build ( );

    }

    public AuthenticationResponse login(AuthenticationRequest request) {
        System.out.println ( request.getEmail ( ) + " " + request.getPassword ( ) );

        try {
            authenticationManager.authenticate (
                    new UsernamePasswordAuthenticationToken (
                            request.getEmail ( ),
                            request.getPassword ( )
                    )
            );
            System.out.println ( "Authentication successful" );

        } catch (BadCredentialsException e) {
            System.out.println ( "Authentication failed: " + e.getMessage ( ) );
            throw new RuntimeException ( "Authentication failed" );
        }

        var user = userRepository.findByEmail ( request.getEmail ( ) )
                .orElseThrow ( () -> new RuntimeException ( "User not found" ) );

        var jwtToken = jwtService.generateToken ( user );
        return AuthenticationResponse.builder ( )
                .token ( jwtToken )
                .build ( );
    }

    public UsersDTO getUserDetails ( String email ) {
        var a = userRepository.findByEmail ( email )
                .orElseThrow ( () -> new RuntimeException ( "Users not found" ) );

        UsersDTO usersDTO = new UsersDTO ();

        usersDTO.setUserid ( a.getUserid () );
        usersDTO.setFirstname ( a.getFirstname () );
        usersDTO.setLastname ( a.getLastname () );
        usersDTO.setEmail ( a.getEmail () );
        usersDTO.setNic ( a.getNic () );
        usersDTO.setPhonenumber ( a.getPhonenumber () );
        usersDTO.setAddress ( a.getAddress () );
        usersDTO.setRegistrationdate ( a.getRegistrationdate () );
        usersDTO.setPassword ( a.getPassword () );
        usersDTO.setRole ( String.valueOf ( a.getRole () ) );
        usersDTO.setStatus ( a.getStatus () );
        usersDTO.setProfilePic (  a.getProfilePic () );

        return usersDTO;

    }

}