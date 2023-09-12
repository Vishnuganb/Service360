package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "trainingsession"
)

public class TrainingSession {
    @Id
    @GeneratedValue
    @Column(updatable = false)
    private Long trainingid;

    @Column( columnDefinition = "TEXT")
    private String trainingimage;

    @Column( columnDefinition = "TEXT")
    private String trainingtitle;

    @Column( columnDefinition = "TEXT")
    private String trainingdescription;

    @Column( columnDefinition = "DATE")
    private Date trainingdate;

    @Column( columnDefinition = "TIME")
    private Time trainingstarttime;

    @Column( columnDefinition = "TIME")
    private Time trainingendtime;

    @Column( columnDefinition = "TEXT")
    private String traininglocation;

    @Column( columnDefinition = "TEXT")
    private String trainingcost;

    @Column( columnDefinition = "TEXT")
    private String servicename;

    @Column( columnDefinition = "INT")
    private String status;

    @Column( columnDefinition = "TEXT")
    private Integer going;

    @Column( columnDefinition = "INT")
    private Integer interested;

    //IS THIS REQUIRED TO BE A PRIMARY KEY ?
    //service provider name
    @ManyToOne
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    private Users serviceprovider;
}
