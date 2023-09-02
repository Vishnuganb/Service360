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
        name = "jobsserviceproviders"
)

public class JobsServiceProviders {
    @Column( columnDefinition = "TEXT")
    private String jobstatus;

    //Applied Service Provider IDs
    @Id
    @ManyToOne
    @JoinColumn(name = "userid")
    private Users serviceproviders;

    //Job IDs
    @Id
    @ManyToOne
    @JoinColumn(name = "jobid")
    private Jobs jobs;
}
