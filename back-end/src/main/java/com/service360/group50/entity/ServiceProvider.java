package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "serviceprovider",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "serviceprovider_email_unique",
                        columnNames = "email"
                )
        }
)
public class ServiceProvider {

    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long serviceproviderid;

    @Column( columnDefinition = "TEXT")
    private String firstname;

    @Column( columnDefinition = "TEXT")
    private String nic;

    @Column( columnDefinition = "TEXT")
    private String files;

    @Column( columnDefinition = "TEXT")
    private String images;

    @Column( columnDefinition = "TEXT")
    private String service;

    @Column( columnDefinition = "TEXT")
    private String category;

    @Column(columnDefinition = "TEXT")
    private String lastname;

    @Column( columnDefinition = "TEXT")
    private String email;

    @Column( columnDefinition = "TEXT")
    private String phonenumber;

    @Column(columnDefinition = "TEXT")
    private String address;

    @Column(nullable = false)
    private LocalDate registrationdate ;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String password;

    @Column( name = "isActive", nullable = false)
    private boolean isactive = true;

    @Column(name = "isEnabled", nullable = false)
    private boolean isenabled = true;

}
