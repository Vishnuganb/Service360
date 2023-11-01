package com.service360.group50.repo;

import com.service360.group50.entity.SystemReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

@Repository
public interface SystemReviewRepository extends JpaRepository<SystemReview,Long> {

    List<SystemReview> findByUsers_Userid(Long userId);
}
