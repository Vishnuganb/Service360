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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long serviceProviderServicesId;

    @ManyToOne
    @JoinColumn(name = "userid")
    private Users users;

    @ManyToOne
    @JoinColumn(name = "serviceid")
    private Services services;

    @ManyToOne
    @JoinColumn(name = "servicecategoryid")
    private ServiceCategory serviceCategory;


}
