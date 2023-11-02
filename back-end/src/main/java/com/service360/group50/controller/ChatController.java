//package com.service360.group50.controller;
//
//import com.service360.group50.dto.MessageDTO;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.handler.annotation.Payload;
//import org.springframework.messaging.handler.annotation.SendTo;
//import org.springframework.stereotype.Controller;
//
//import org.springframework.messaging.simp.SimpMessagingTemplate;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//
//
//@Controller
//@CrossOrigin(origins = "*")
//public class ChatController {
//
//    @Autowired
//    private SimpMessagingTemplate simpMessagingTemplate;
//
//    @MessageMapping("/message")
//    @SendTo("/chatroom/public")
//    public MessageDTO receiveMessage(@Payload MessageDTO messageDTO){
//        return messageDTO;
//    }
//
//    @MessageMapping("/private-message")
//    public MessageDTO recMessage(@Payload MessageDTO messageDTO){
//        simpMessagingTemplate.convertAndSendToUser(messageDTO.getReceiverId(),"/private", messageDTO);
//        System.out.println(messageDTO.toString());
//        return messageDTO;
//    }
//
//
//
//}
//
