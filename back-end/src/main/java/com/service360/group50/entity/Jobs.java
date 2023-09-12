package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Entity
@Table(
        name = "jobs"
)

public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long jobid;

    @Column( columnDefinition = "TEXT")
    private String jobtitle;

    @Column( columnDefinition = "DATE")
    private LocalDate duedate;

    @Column( columnDefinition = "DATE")
    private LocalDate posteddate;

    @Column( columnDefinition = "TEXT")
    private String servicename;

    @Column( columnDefinition = "TEXT")
    private String jobdescription;

    @Column( columnDefinition = "TEXT")
    private String joblocation;

    @Column( columnDefinition = "TEXT")
    private String images;

    @Column( columnDefinition = "TEXT")
    private String paymentstatus;

    @Column( columnDefinition = "TEXT")
    private String isquotation;

    //customerid
    @ManyToOne
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    private Users customer;

}
