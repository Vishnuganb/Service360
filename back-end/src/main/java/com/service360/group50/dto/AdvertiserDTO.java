package com.service360.group50.dto;

public class AdvertiserDTO {
    private Long advertiserid;
    private String shopname;
    private String shopaddress;
    private Long userid;

    public Long getAdvertiserid() {
        return advertiserid;
    }

    public void setAdvertiserid(Long advertiserid) {
        this.advertiserid = advertiserid;
    }

    public String getShopname() {
        return shopname;
    }

    public void setShopname(String shopName) {
        this.shopname = shopName;
    }

    public String getShopaddress() {
        return shopaddress;
    }

    public void setShopaddress(String shopAddress) {
        this.shopaddress = shopAddress;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userId) {
        this.userid = userId;
    }
}
