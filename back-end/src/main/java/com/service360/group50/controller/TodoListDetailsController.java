package com.service360.group50.controller;

import com.service360.group50.entity.TodoList;
import com.service360.group50.entity.TodoListDetails;
import com.service360.group50.entity.Users;
import com.service360.group50.repo.TodoListRepository;
import com.service360.group50.service.TodoListDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class TodoListDetailsController {
    @Autowired
    TodoListRepository todoListRepository;

    private final TodoListDetailsService todoListDetailsService;

    @PostMapping("/createTodoListDetails")
    public TodoListDetails createTodoListDetails(@RequestBody TodoListDetails newTodoListDetails) {
        return todoListDetailsService.createTodoListDetails(newTodoListDetails);
    }

    @GetMapping("/viewTodoListDetails")
    public List<TodoListDetails> viewTodoListDetails() {
        return todoListDetailsService.viewTodoListDetails();
    }
    @PutMapping("/viewTodoListDetails/{todoListdetailsid}")
    public TodoListDetails toggleTaskCompletion(@PathVariable("todoListdetailsid") Long todoListId,
                                                @RequestParam("completed") Boolean completed,
                                                @RequestParam("hours") Double hours) {

        // Retrieve the task by ID
        TodoListDetails task = todoListDetailsService.getTodoListDetailsById(todoListId);

        // Retrieve the todolist by id
        Optional<TodoList> todolistOptional = todoListRepository.getTodoListByTodolistid(todoListId);
        TodoList todolist = todolistOptional.orElse(null);

        // Toggle the completion status
        task.setCompleted(!completed);
        task.setWorkedHours(hours);
        task.setTodolist(todolist);

        // Save the updated task
        return todoListDetailsService.createTodoListDetails(task);
    }

}