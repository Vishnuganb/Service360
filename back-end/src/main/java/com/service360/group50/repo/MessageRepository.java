package com.service360.group50.repo;

import com.service360.group50.dto.ChatDTO;
import com.service360.group50.entity.Message;
import com.service360.group50.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findBySenderOrReceiver(Users user, Users user1);

    @Query("SELECT DISTINCT CASE " +
            "WHEN m.sender = :user THEN m.receiver " +
            "WHEN m.receiver = :user THEN m.sender " +
            "END " +
            "FROM Message m " +
            "WHERE m.receiver = :user OR m.sender = :user")
    List<Users> findChatPersons(@Param("user") Users user);

}
