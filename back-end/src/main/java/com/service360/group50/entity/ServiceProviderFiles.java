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
        name = "serviceproviderfiles"
)

public class ServiceProviderFiles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long serviceproviderid;

    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long fileid;

    @Column( columnDefinition = "TEXT")
    private String files;

    //serviceproviderid
}