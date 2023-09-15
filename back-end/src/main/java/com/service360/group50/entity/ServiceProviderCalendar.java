package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "serviceprovidercalendar"
)

public class ServiceProviderCalendar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long eventid;

    @Column( columnDefinition = "DATE")
    private LocalDate eventdate;

    @Column( columnDefinition = "Time")
    private Time eventstarttime;

    @Column( columnDefinition = "Time")
    private Time eventendtime;

    @Column( columnDefinition = "TEXT")
    private String eventdescription;

    //service provider id
}