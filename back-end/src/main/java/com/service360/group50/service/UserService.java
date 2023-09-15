package com.service360.group50.service;

import com.service360.group50.dto.UsersDTO;
import com.service360.group50.entity.Users;
import com.service360.group50.repo.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public List<Users> getAllUsers ( String role ) {
        return userRepository.findByRole ( role );
    }

    @Transactional
    public UsersDTO getUserById(Long userId) {
        Users data = userRepository.findById(userId).orElse(null);

        if (data != null) {
            UsersDTO usersDTO = new UsersDTO();
            usersDTO.setUserid(data.getUserid());
            usersDTO.setFirstname(data.getFirstname());
            usersDTO.setLastname(data.getLastname());
            usersDTO.setPhonenumber(data.getPhonenumber());
            usersDTO.setAddress(data.getAddress());
            usersDTO.setEmail(data.getEmail());
            usersDTO.setNic(data.getNic());
            usersDTO.setProfilePic(data.getProfilePic());
            usersDTO.setPassword(data.getPassword());
            usersDTO.setRole( String.valueOf ( data.getRole() ) );
            usersDTO.setStatus(data.getStatus());
            return usersDTO;
        } else {
            return null; // Handle the case where the user is not found
        }
    }


    public Users updateUser(long userid, String firstname, String lastname, String password, String phonenumber,
                               String address, String nic, String profilePic) {

        try {
            Optional<Users> usersOptional = userRepository.findById(userid);

            if (usersOptional.isEmpty()) {
                throw new Exception("User not found");
            }

            Users userdata = usersOptional.get();

            if (firstname != null) {
                userdata.setFirstname(firstname);
            }

            if (lastname != null) {
                userdata.setLastname(lastname);
            }

            if (password != null) {
                userdata.setPassword(passwordEncoder.encode(password));
            }

            if (phonenumber != null) {
                userdata.setPhonenumber(phonenumber);
            }

            if (address != null) {
                userdata.setAddress(address);
            }

            if (nic != null) {
                userdata.setNic(nic);
            }

            if (profilePic != null) {
                userdata.setProfilePic(profilePic);
            }

            userRepository.save(userdata);

            return userdata;

        }catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    //get user by userid
    public Users getUser(Long id) {
        return userRepository.findById(id).orElse(null);
    }

}
