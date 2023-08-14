package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "Jobs"
)

public class Jobs {

    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long jobid;

    @Column
    private Long jobcommentid;

    @Column( columnDefinition = "TEXT")
    private String profile;

    @Column( columnDefinition = "TEXT")
    private String customername;

    @Column( columnDefinition = "TEXT")
    private String lastseen;

    @Column( columnDefinition = "TEXT")
    private String jobtitle;

    @Column( columnDefinition = "DATE")
    private LocalDate duedate;

    @Column( columnDefinition = "DATE")
    private LocalDate posteddate;

    @Column( columnDefinition = "TEXT")
    private String servicename;

    @Column( columnDefinition = "TEXT")
    private String jobstatus;

    @Column( columnDefinition = "TEXT")
    private String jobdescription;

    @Column( columnDefinition = "TEXT")
    private String joblocation;

    @Column( columnDefinition = "TEXT")
    private String images;

}
