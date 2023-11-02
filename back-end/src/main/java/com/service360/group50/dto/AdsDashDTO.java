package com.service360.group50.dto;

public class AdsDashDTO {

    private String PlanName;

    private String startDate;

    private String endDate;

    private String remainingDays;

    private Long totalAds;

    private Long verifiedAds;

    private Long pendingAds;

    private Long rejectedAds;

    private Long disabledAds;

    public AdsDashDTO() {
        this.PlanName = PlanName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.remainingDays = remainingDays;
        this.totalAds = totalAds;
        this.verifiedAds = verifiedAds;
        this.pendingAds = pendingAds;
        this.rejectedAds = rejectedAds;
        this.disabledAds = disabledAds;
    }


    public String getPlanName() {
        return PlanName;
    }

    public void setPlanName(String planName) {
        PlanName = planName;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getRemainingDays() {
        return remainingDays;
    }

    public void setRemainingDays(String remainingDays) {
        this.remainingDays = remainingDays;
    }

    public Long getTotalAds() {
        return totalAds;
    }

    public void setTotalAds(Long totalAds) {
        this.totalAds = totalAds;
    }

    public Long getVerifiedAds() {
        return verifiedAds;
    }

    public void setVerifiedAds(Long verifiedAds) {
        this.verifiedAds = verifiedAds;
    }

    public Long getPendingAds() {
        return pendingAds;
    }

    public void setPendingAds(Long pendingAds) {
        this.pendingAds = pendingAds;
    }

    public Long getRejectedAds() {
        return rejectedAds;
    }

    public void setRejectedAds(Long rejectedAds) {
        this.rejectedAds = rejectedAds;
    }

    public Long getDisabledAds() {
        return disabledAds;
    }

    public void setDisabledAds(Long disabledAds) {
        this.disabledAds = disabledAds;
    }
}
