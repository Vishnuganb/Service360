package com.service360.group50.repo;

import com.service360.group50.entity.ServiceProviderCalendar;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceProviderCalendarRepository extends CrudRepository<ServiceProviderCalendar,Long> {

}
