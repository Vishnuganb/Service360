package com.service360.group50.repo;

import com.service360.group50.entity.Jobs;
import com.service360.group50.entity.Vacancies;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VacanciesRepository extends CrudRepository<Vacancies,Long> {
    List<Vacancies> findAllByvacancystatus(String jobstatus);

}
