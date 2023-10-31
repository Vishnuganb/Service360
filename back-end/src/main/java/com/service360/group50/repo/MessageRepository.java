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

    @Query("SELECT DISTINCT m.sender FROM Message m WHERE m.receiver = :user " +
            "UNION " +
            "SELECT DISTINCT m.receiver FROM Message m WHERE m.sender = :user")
    List<Users> findChatPartnersByUser(@Param("user") Users user);


    @Query(value = "SELECT * FROM Message " +
            "WHERE (sender_id = :userId AND receiver_id = :chatPersonId) " +
            "   OR (sender_id = :chatPersonId AND receiver_id = :userId) " +
            "ORDER BY timestamp",
            nativeQuery = true)
    List<Message> findChatMessages(Long userId, Long chatPersonId);

}
