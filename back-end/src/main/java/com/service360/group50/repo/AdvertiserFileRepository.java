package com.service360.group50.repo;

import com.service360.group50.entity.AdvertiserFiles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdvertiserFileRepository extends JpaRepository<AdvertiserFiles, Long> {
}
