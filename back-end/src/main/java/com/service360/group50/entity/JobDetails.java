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
        name = "jobdetails"
)

public class JobDetails {
    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long jobdetailsid;

    @Column( columnDefinition = "DATE")
    private LocalDate jobdate;

    @Column( columnDefinition = "Time")
    private String jobstarttime;

    @Column( columnDefinition = "Time")
    private String jobendtime;

}
