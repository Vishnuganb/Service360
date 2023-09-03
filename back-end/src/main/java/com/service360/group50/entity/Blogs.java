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
        name = "blogs"
)

public class Blogs {
    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long blogid;

    @Column( columnDefinition = "TEXT")
    private String blogtitle;

    @Column( columnDefinition = "TEXT")
    private String blogdescription;

    @Column( columnDefinition = "TEXT")
    private String blogimage;

    @Column( columnDefinition = "TEXT")
    private String servicename;

    //serviceproviderid
    @ManyToOne
    @JoinColumn(name = "userid")
    private Users users;
}