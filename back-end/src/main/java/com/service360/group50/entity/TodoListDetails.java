package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "todolistdetails"
)
public class TodoListDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long todolistdetailsid;

    @OneToOne
    @JoinColumn(name = "todolistid")
    private TodoList todolist;

    @Column( columnDefinition = "TEXT")
    private String task;

    @Column( columnDefinition = "DATE")
    private Date dueDate;

    @Column
    private LocalDateTime reminder;
}