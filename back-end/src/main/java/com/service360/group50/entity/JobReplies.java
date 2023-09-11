package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Entity
@Table(
        name = "jobreplies"
)

public class JobReplies {
    //Service Provider IDs
    @Id
    @ManyToOne
    @JoinColumn(name = "userid")
    private Users serviceproviders;

    //Job IDs
    @Id
    @ManyToOne
    @JoinColumn(name = "jobid")
    private Jobs jobs;

    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long replyid;

    @Column( columnDefinition = "DATE")
    private LocalDate replydate;

    @Column( columnDefinition = "TEXT")
    private String replymessage;
}
