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
    @GeneratedValue()
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

    @Column( columnDefinition = "Text")
    private String trainingtime;

    @Column( columnDefinition = "TEXT")
    private String traininglocation;

    @Column( columnDefinition = "TEXT")
    private String trainingduration;

    @Column( columnDefinition = "TEXT")
    private String trainingcost;

    @Column( columnDefinition = "TEXT")
    private String servicename;

    @Column( columnDefinition = "TEXT")
    private String going;

    @Column( columnDefinition = "TEXT")
    private String interested;


    //service provider name
}
