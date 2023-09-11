package com.service360.group50.service;

import com.service360.group50.entity.Ads;
import com.service360.group50.repo.AdsRepository;
import com.service360.group50.repo.AdvertiserRepository;
import com.service360.group50.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdvertiserService {

    @Autowired
    private AdsRepository adsRepository;

    @Autowired
    private UserRepository userRepository;
    
    public Ads CreateAd(Ads ad) {
       return adsRepository.save(ad);
    }

    public Ads getAd(Long id) {
        return adsRepository.findById(id).orElse(null);
    }

    public List<Ads> getAds(){
        return adsRepository.findAll();
    }

    public List<Ads> getAdsByUserId(Long userId){
        // find user by userId
        return adsRepository.findByUser_userid(userId);
    }

    // get adsImages by adsId
    public String getAdsImages(Long id) {
        return adsRepository.findById(id).orElse(null).getAdsImages();
    }



}
