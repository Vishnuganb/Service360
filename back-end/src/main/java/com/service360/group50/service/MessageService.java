package com.service360.group50.service;

import com.service360.group50.dto.ChatDTO;
import com.service360.group50.dto.ChatMessageDTO;
import com.service360.group50.entity.Message;
import com.service360.group50.entity.Users;
import com.service360.group50.repo.MessageRepository;
import com.service360.group50.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    public List<Message> getOldMessages(String senderEmail) {

       // get users by email
        Users user = userService.getUserByEmail(senderEmail);

        // get messages by user  match by user and sender or receiver
        List<Message> messages = messageRepository.findBySenderOrReceiver(user, user);

        return messages;
    }

    public List<ChatDTO> getChatPersons(Long userId) {
        Optional<Users> usersOptional = userRepository.findById(userId);

        if (usersOptional.isPresent()) {
            Users user = usersOptional.get();
            List<Users> chatPersons = messageRepository.findChatPartnersByUser(user);

            // Convert Users to ChatDTO
            return chatPersons.stream().map(chatPerson -> {
                ChatDTO chatDTO = new ChatDTO();
                chatDTO.setEmail(chatPerson.getEmail());
                chatDTO.setName(chatPerson.getFirstname());
                chatDTO.setUserId(chatPerson.getUserid());
                chatDTO.setLastMessage("Hello");
                return chatDTO;
            }).collect(Collectors.toList());
        }

        return Collections.emptyList(); // Return an empty list instead of null
    }

    public List<ChatMessageDTO> getChatMessages(Long userId, Long chatPersonId) {
        List<Message> messages = messageRepository.findChatMessages(userId, chatPersonId);

        return messages.stream().map(message -> {
            ChatMessageDTO chatMessageDTO = new ChatMessageDTO();
            chatMessageDTO.setMessage(message.getMessage());
            chatMessageDTO.setTimestamp(String.valueOf(message.getTimestamp()));
            chatMessageDTO.setSenderId(message.getSender().getUserid());
            chatMessageDTO.setReceiverId(message.getReceiver().getUserid());
            return chatMessageDTO;

        }).collect(Collectors.toList());
    }

    public Message sendMessage(Message message) {
        return messageRepository.save(message);
    }
}
