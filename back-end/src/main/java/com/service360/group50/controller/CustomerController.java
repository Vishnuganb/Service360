package com.service360.group50.controller;

import com.service360.group50.entity.CServiceProviderDetails;
import com.service360.group50.entity.TodoListDetails;
import com.service360.group50.service.TodoListDetailsService;
import com.service360.group50.service.CServiceProviderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
@RequiredArgsConstructor
public class CustomerController {

    private final CServiceProviderService cServiceProviderService;
    private final TodoListDetailsService todoListDetailsService;

    @GetMapping("/details")
    @ResponseBody
    public List<CServiceProviderDetails> getAllDetails() {
        // You may want to add exception handling here, e.g., if cServiceProviderService is null
        return cServiceProviderService.getAllDetails();
    }

    @GetMapping("/tododetails")
    @ResponseBody
    public List<TodoListDetails> getAllTodoListDetails() {
        return todoListDetailsService.getAllDetails();
    }
}
