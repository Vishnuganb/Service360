package com.service360.group50.service;

import com.service360.group50.entity.CServiceProviderDetails;
import com.service360.group50.repo.CServiceProviderRepo;
import com.service360.group50.entity.TodoListDetails;
import com.service360.group50.repo.TodoListDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoListDetailsService {
    private final TodoListDetailsRepo todoListDetailsRepo;

    @Autowired
    public TodoListDetailsService(TodoListDetailsRepo todoListDetailsRepo) {
        this.todoListDetailsRepo = todoListDetailsRepo;
    }

    public List<TodoListDetails> getAllDetails() {
        try {
            List<TodoListDetails> todoListDetails = todoListDetailsRepo.findAll();
            return todoListDetails;
        } catch (Exception e) {
            // You can log the exception or handle it in a way that makes sense for your application
            throw new RuntimeException("Failed to fetch service provider details", e);
        }
    }

}

