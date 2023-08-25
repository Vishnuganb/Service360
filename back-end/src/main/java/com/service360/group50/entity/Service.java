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
        name = "service"
)

public class Service {
    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long serviceid;

    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long servicecategoryid;

    @Column( columnDefinition = "TEXT")
    private String name;

    @Column( columnDefinition = "TEXT")
    private String image;

    //servicecategoryid
}