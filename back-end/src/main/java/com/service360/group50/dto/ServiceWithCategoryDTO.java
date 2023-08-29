package com.service360.group50.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Base64;

public class ServiceWithCategoryDTO {
    private Long id;
    private String serviceImage;

    private String categoryImage;

    private String service; // Service name
    private String category; // Service category name

    public ServiceWithCategoryDTO() {
    }

    public ServiceWithCategoryDTO(Long id, String serviceImage,String categoryImage, String service, String category) {
        this.id = id;
        this.serviceImage = serviceImage;
        this.categoryImage = categoryImage;
        this.service = service;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public String getServiceImage() {
        return serviceImage;
    }

    public String getCategoryImage() {
        return categoryImage;
    }

    public String getService() {
        return service;
    }

    public String getCategory() {
        return category;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setServiceImage(byte[] imageBytes) {
        this.serviceImage = Base64.getEncoder().encodeToString(imageBytes);
    }

    public void setCategoryImage(byte[] imageBytes) {
        this.categoryImage = Base64.getEncoder().encodeToString(imageBytes);
    }

    public void setService(String service) {
        this.service = service;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
