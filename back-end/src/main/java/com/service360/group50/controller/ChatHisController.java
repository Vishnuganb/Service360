package com.service360.group50.controller;

import com.service360.group50.dto.ChatDTO;
import com.service360.group50.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ChatHisController {


    @Autowired
    private MessageService messageService;
    // get user chat persons

    @GetMapping("auth/chatpersons/{userId}")
    public List<ChatDTO> getChatPersons(@PathVariable Long userId){
        return messageService.getChatPersons(userId);

    }

}
