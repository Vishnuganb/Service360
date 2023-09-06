package com.service360.group50.repo;

import com.service360.group50.entity.VacanciesServiceProviders;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VacanciesServiceProvidersRepository extends CrudRepository<VacanciesServiceProviders,Long> {
    @Query("SELECT vsp.vacancies.vacancyid, vsp.vacancystatus FROM VacanciesServiceProviders vsp")
    List<Object[]> findMyVacanciesIdsWithStatus();

    @Query("SELECT vsp.vacancies.vacancyid FROM VacanciesServiceProviders vsp where vsp.vacancystatus = :vacancystatus")
    List<Long> findAllByvacancystatus(@Param("vacancystatus") String vacancystatus);
}
