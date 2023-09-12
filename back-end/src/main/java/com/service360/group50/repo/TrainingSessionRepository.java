package com.service360.group50.repo;

import com.service360.group50.entity.Jobs;
import com.service360.group50.entity.TrainingSession;
import com.service360.group50.entity.Vacancies;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

@Repository
public interface TrainingSessionRepository extends CrudRepository<TrainingSession,Long>{
    @Query("SELECT t FROM TrainingSession t INNER JOIN t.serviceprovider u")
    List<TrainingSession> findAllTrainingSessionsWithSpDetails();

    @Query("SELECT t FROM TrainingSession t INNER JOIN t.serviceprovider u where t.trainingid = :id")
    TrainingSession findATrainingSessionWithSpDetails(@Param("id") Long id);
}
