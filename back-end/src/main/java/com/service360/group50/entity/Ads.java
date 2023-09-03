package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "Ads"
)
public class Ads {
    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long adsId;

    @Column( columnDefinition = "TEXT")
    private String adsName;

    @Column( columnDefinition = "TEXT", nullable = true)
    private String status;

    @Column( columnDefinition = "TEXT", nullable = true)
    private String verificationStatus;

    @Column( columnDefinition = "TEXT", nullable = true)
    private String adsImages;

    @Column( columnDefinition = "TEXT", nullable = true)
    private String category;

    @Column( columnDefinition = "TEXT", nullable = true)
    private String price;

    @Column( columnDefinition = "TEXT", nullable = true)
    private String warrantyMonths;

    @Column( columnDefinition = "TEXT", nullable = true)
    private String description;

    @Column( columnDefinition = "TEXT", nullable = true)
    private String area;

    @Column( columnDefinition = "TEXT", nullable = true)
    private String delivery;

    @Column( columnDefinition = "TEXT", nullable = true)
    private String verifyImages;


    // Advertiser id want foriegn key

}
