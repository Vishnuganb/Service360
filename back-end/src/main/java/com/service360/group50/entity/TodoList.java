package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "todolist"
)

public class TodoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long todolistid;

    //customer id
    //service provider id
//    @ManyToMany(mappedBy = "todolist")
//    private List<Users> users;

    //job id
    @OneToOne
    @JoinColumn(name = "jobid")
    private Jobs jobs;

    //vacancy id
    @OneToOne
    @JoinColumn(name = "vacancyid")
    private Vacancies vacancies;
}