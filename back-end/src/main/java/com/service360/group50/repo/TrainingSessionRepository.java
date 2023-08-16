package com.service360.group50.repo;

import com.service360.group50.entity.TrainingSession;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface TrainingSessionRepository extends CrudRepository<TrainingSession,Long>{

}
