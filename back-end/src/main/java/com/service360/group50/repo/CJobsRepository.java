package com.service360.group50.repo;

import com.service360.group50.entity.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CJobsRepository extends JpaRepository<Jobs, Long> {



}
