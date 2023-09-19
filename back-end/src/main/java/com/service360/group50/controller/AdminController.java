package com.service360.group50.controller;

import com.service360.group50.dto.AdvertiserDTO;
import com.service360.group50.entity.Advertiser;
import com.service360.group50.entity.Role;
import com.service360.group50.entity.Users;
import com.service360.group50.service.CustomerService;
import com.service360.group50.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static com.service360.group50.entity.Role.CUSTOMER;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class AdminController {

    private final CustomerService customerService;
    private final UserService userService;

    @GetMapping("/getAllCustomers")
    public List<Users> getAllCustomers() {
        Role targetRole = Role.CUSTOMER; // Assuming Role is an enum with a CUSTOMER value
        return userService.getAllUsers(targetRole);
    }

    @GetMapping("/getAllAdvertisers")
    public List<AdvertiserDTO> getAllAdvertisers() {
        Role targetRole = Role.ADVERTISER;
        List<Users> advertiserUsers = userService.getAllUsers(targetRole);

        // Convert Users to AdvertiserResponse objects
        List<AdvertiserDTO> advertiserResponses = new ArrayList<> ();
        for (Users user : advertiserUsers) {
            AdvertiserDTO advertiserDTO = convertToAdvertiserResponse(user);
            advertiserResponses.add(advertiserDTO);
        }

        return advertiserResponses;
    }

    private AdvertiserDTO convertToAdvertiserResponse(Users user) {
        Advertiser advertiser = userService.getAdvertiserByUser(user);
        AdvertiserDTO response = new AdvertiserDTO();
        response.setUserid(user.getUserid());
        response.setFirstname(user.getFirstname());
        response.setLastname(user.getLastname());
        response.setEmail(user.getEmail());
        response.setNic(user.getNic());
        response.setPhonenumber(user.getPhonenumber());
        response.setAddress(user.getAddress());
        response.setRegistrationdate(user.getRegistrationdate());
        response.setStatus(user.getStatus());
        response.setProfilePic(user.getProfilePic());
        response.setLocked ( user.getLocked () );
        response.setIsactive ( user.isIsactive () );
        response.setShopname(advertiser.getShopname());
        response.setShopaddress(advertiser.getShopaddress());

        return response;
    }



//    public List<Users> getAllServiceProviders() {
//        String targetRole = "SERVICEPROVIDER";
//        return userService.getAllUsers(targetRole);
//    }

    @PutMapping("/updateCustomer")
    public Users updateCustomer(
            @RequestParam(value = "userid") Long userid,
            @RequestParam(value = "locked") boolean locked

    ){
        return userService.updateUserLock(userid, locked);
    }
    @PutMapping("/updateAdvertiserEnableStatus")
    public Users updateAdvertiserEnable(
            @RequestParam(value = "userid") Long userid,
            @RequestParam(value = "locked") boolean locked
    ){
        return userService.updateAdvertiserEnable(userid, locked);
    }
    @PutMapping("/updateAdvertiserDisableStatus")
    public Users updateAdvertiserDisable(
            @RequestParam(value = "userid") Long userid,
            @RequestParam(value = "locked") boolean locked
    ){
        return userService.updateAdvertiserDisable(userid, locked);
    }
    @PutMapping("/updateAdvertiserAcceptStatus")
    public Users updateAdvertiserAcceptStatus(
            @RequestParam(value = "userid") Long userid,
            @RequestParam(value = "locked") boolean locked,
            @RequestParam(value = "status") String status

    ){
        return userService.updateUserLockedAndAcceptStatus(userid, locked, status);
    }
    @PutMapping("/updateAdvertiserRejectStatus")
    public Users updateAdvertiserRejectStatus(
            @RequestParam(value = "userid") Long userid,
            @RequestParam(value = "locked") boolean locked,
            @RequestParam(value = "status") String status,
            @RequestParam(value = "reason") String reason

    ){
        return userService.updateUserLockedAndRejectStatus(userid, locked, status, reason);
    }


}
