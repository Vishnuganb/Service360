package com.service360.group50.service;


import com.service360.group50.dto.UsersDTO;
import com.service360.group50.entity.Advertiser;
import com.service360.group50.entity.Role;
import com.service360.group50.entity.SystemReview;
import com.service360.group50.entity.Users;
import com.service360.group50.repo.SystemReviewRepository;
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
    @Autowired
    private SystemReviewRepository systemReviewRepository;

    private final PasswordEncoder passwordEncoder;


    public List<Users> getAllUsers(Role role) {
        List<Users> users = userRepository.findByRoleAndEnabled(role, true);
        return users;
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

    public int enableUser ( String email ) {
        return userRepository.enableUser ( email );
    }

    public Users updateCustomer ( long userid, boolean enabled ) {
        Optional<Users> usersOptional = userRepository.findById ( userid );
        if ( usersOptional.isEmpty () ) {
            return null;
        }
        Users userdata = usersOptional.get ();
        userdata.setLocked ( enabled );
        userRepository.save ( userdata );
        return userdata;
    }
    public SystemReview addSystemReview(Long userId, String reviewText, int rating) {
            Users user = userRepository.findById(userId).orElse(null);
            if (user == null) {
                throw new IllegalArgumentException("User not found");
            }
            SystemReview systemReview = new SystemReview();
            systemReview.setUsers(user);
            systemReview.setReview(reviewText);
            systemReview.setRating(rating);

            return systemReviewRepository.save(systemReview);
        }
    }



