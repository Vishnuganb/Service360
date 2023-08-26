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
        name = "reviewandrating"
)
public class SystemReview {
    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long ratingid;

    @Column( columnDefinition = "TEXT")
    private String review;

    @Column( columnDefinition = "INTEGER")
    private int rating;

    @Column( columnDefinition = "DATE")
    private LocalDate posteddate;

    //user name
    //profile
    @OneToOne
    @JoinColumn(name = "userid")
    private Users users;
}
