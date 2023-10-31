package com.service360.group50.controller;

import com.service360.group50.dto.ChatDTO;
import com.service360.group50.dto.ChatMessageDTO;
import com.service360.group50.entity.Message;
import com.service360.group50.request.MessageRequest;
import com.service360.group50.service.MessageService;
import com.service360.group50.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ChatHisController {


    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;
    // get user chat persons

    @GetMapping("auth/chatpersons/{userId}")
    public List<ChatDTO> getChatPersons(@PathVariable Long userId){
        return messageService.getChatPersons(userId);
    }

    @GetMapping("auth/chatmessages/{userId}/{chatPersonId}")
    public List<ChatMessageDTO> getMessages(@PathVariable Long userId, @PathVariable Long chatPersonId){
        return messageService.getChatMessages(userId, chatPersonId);
    }

    @PostMapping("auth/sendmessage")
    public Message sendMessage(@RequestParam("message") String messages, @RequestParam("senderId") Long senderId, @RequestParam("receiverId") Long receiverId){
        Message message = new Message();
        message.setMessage(messages);
        message.setReceiver(userService.getUser(receiverId));
        message.setSender(userService.getUser(senderId));
        return messageService.sendMessage(message);
    }


}
