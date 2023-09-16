package com.service360.group50.dto;

import com.service360.group50.entity.Ads;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

public class AdsDTO {

    private  AdvertiserDTO advertiser;
    private List<Ads> ads;

    private List<ImagesDTO> adsImages;


    public AdsDTO(

    ) {
        this.advertiser = advertiser;
        this.ads = new ArrayList<>();
    }

    // getters and setters
    public AdvertiserDTO getAdvertiser() {
        return advertiser;
    }

    public void setAdvertiser(AdvertiserDTO advertiser) {
        this.advertiser = advertiser;
    }

    public List<Ads> getAds() {
        return ads;
    }

    public void setAds(List<Ads> ads) {
        this.ads = ads;
    }

    public List<ImagesDTO> getAdsImages() {
        return adsImages;
    }

    public void setAdsImages(List<ImagesDTO> adsImages) {
        this.adsImages = adsImages;
    }





}
