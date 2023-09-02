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
        name = "serviceproviderservices"
)

public class ServiceProviderServices {
    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long serviceid;

    @Column( columnDefinition = "TEXT")
    private String services;

    @Column( columnDefinition = "TEXT")
    private String category;

    //serviceproviderid
    @Id
    @ManyToOne
    @JoinColumn(name = "userid")
    private ServiceProvider serviceProvider;
}
