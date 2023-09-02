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
        name = "vacanciesserviceproviders"
)

public class VacanciesServiceProviders {
    @Column( columnDefinition = "TEXT")
    private String vacancystatus;

    //Applied Service Provider IDs
    @Id
    @ManyToOne
    @JoinColumn(name = "userid")
    private Users users;

    //Vacancy IDs
    @Id
    @ManyToOne
    @JoinColumn(name = "vacancyid")
    private Vacancies vacancies;
}
