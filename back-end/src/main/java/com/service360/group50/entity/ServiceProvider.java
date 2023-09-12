package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "serviceprovider"
)

public class ServiceProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long serviceproviderid;

    @OneToOne
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    private Users users;

    @OneToMany(mappedBy = "serviceProvider")
    private List<ServiceProviderFiles> serviceProviderFiles;

    @OneToMany(mappedBy = "serviceProvider")
    private List<ServiceProviderServices> serviceProviderServices;

}
