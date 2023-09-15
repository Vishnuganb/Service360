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
        name = "vacancies"
)

public class Vacancies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long vacancyid;

    @Column( columnDefinition = "TEXT")
    private String vacancytitle;

    @Column( columnDefinition = "DATE")
    private LocalDate duedate;

    @Column( columnDefinition = "DATE")
    private LocalDate posteddate;

    @Column( columnDefinition = "TEXT")
    private String servicename;

    @Column( columnDefinition = "TEXT")
    private String vacancystatus;

    @Column( columnDefinition = "TEXT")
    private String vacancydescription;

    @Column( columnDefinition = "TEXT")
    private String vacancylocation;

    @Column( columnDefinition = "TEXT")
    private String vacancytype;

    @Column( columnDefinition = "TEXT")
    private String qualifications;

    @Column( columnDefinition = "TEXT")
    private String responsibilities;

    //profile
    //customername
    //lastseen
    //address
    @ManyToMany(mappedBy = "vacancies")
    private List<Users> users;
}