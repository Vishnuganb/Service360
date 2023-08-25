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
        name = "jobs"
)

public class ServiceProvider {
    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long serviceproviderid;

    @Column( columnDefinition = "TEXT")
    private String giramaniladarifile;

    //serviceid
    //fileid
    //user id
}