package com.service360.group50.repo;

import com.service360.group50.entity.VacanciesServiceProviders;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VacanciesServiceProvidersRepository extends CrudRepository<VacanciesServiceProviders,Long> {
    @Query("SELECT vsp.vacancies.vacancyid, vsp.vacancystatus FROM VacanciesServiceProviders vsp")
    List<Object[]> findMyVacanciesIdsWithStatus();
}
