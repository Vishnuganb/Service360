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
    @Column( columnDefinition = "TEXT")
    private String giramaniladarifile;

    //user id
    @Id
    @OneToOne
    @JoinColumn(name = "userid")
    private Users users;

    @OneToMany(mappedBy = "serviceProvider")
    private List<ServiceProviderFiles> serviceProviderfiles;

    @OneToMany(mappedBy = "serviceProvider")
    private List<ServiceProviderServices> serviceProviderservices;

    //serviceid
    //fileid

}
