package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Entity
@Table(
        name = "quotation"
)

public class Quotation {
    @Id
    @GeneratedValue
    @Column(updatable = false)
    private Long quotationid;

    //Job IDs
    @ManyToOne
    @JoinColumn(name = "jobid")
    private Jobs jobs;

    //Applied Service Provider IDs
    @ManyToOne
    @JoinColumn(name = "userid")
    private Users serviceproviders;

    @Column( columnDefinition = "TEXT")
    private String quotationpdf;
}
