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
        name = "advertiser"
)

public class Advertiser {
    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long advertiserid;

    @Column( columnDefinition = "TEXT")
    private String shopname;

    @Column( columnDefinition = "TEXT")
    private String shopaddress;

    //user id
}
