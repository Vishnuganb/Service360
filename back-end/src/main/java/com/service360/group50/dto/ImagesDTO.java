package com.service360.group50.dto;

import java.util.ArrayList;
import java.util.List;

public class ImagesDTO {

    private List<byte[]> images;


    public ImagesDTO() {

        this.images = new ArrayList<>();
    }


    public List<byte[]> getImages() {
        return images;
    }

    public void setImages(List<byte[]> images) {
        this.images = images;
    }

}
