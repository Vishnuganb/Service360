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
import com.service360.group50.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private static final String FILES_UPLOAD_DIR = "src/main/resources/static/uploads/";

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

    public AuthenticationResponse advertiserRegister(UserRegisterRequest request) {


            var advertiser = Users.builder ( )
                    .firstname ( request.getFirstname ( ) )
                    .lastname ( request.getLastname ( ) )
                    .phonenumber ( request.getPhonenumber ( ) )
                    .email ( request.getEmail ( ) )
                    .nic ( request.getNic ( ) )
                    .password ( passwordEncoder.encode ( request.getPassword ( ) ) )
                    .role ( Role.ADVERTISER )
                    .build ( );

        userRepository.save(advertiser);

            var jwtToken = jwtService.generateToken ( advertiser );
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

    public AuthenticationResponse login ( AuthenticationRequest request ) {
        authenticationManager.authenticate (
                new UsernamePasswordAuthenticationToken (
                        request.getEmail ( ),
                        request.getPassword ( )
                )
        );

        var customer = userRepository.findByEmail ( request.getEmail ( ) )
                .orElseThrow ( () -> new RuntimeException ( "Users not found" ) );

        var jwtToken = jwtService.generateToken ( customer );
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

        return usersDTO;

    }

}
