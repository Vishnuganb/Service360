package com.service360.group50.controller;

import com.service360.group50.entity.TodoListDetails;
import com.service360.group50.service.TodoListDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class TodoListDetailsController {
    private final TodoListDetailsService todoListDetailsService;

    @PostMapping("/createTodoListDetails")
    public TodoListDetails createTodoListDetails(@RequestBody TodoListDetails newTodoListDetails) {
        System.out.println(newTodoListDetails);
        return todoListDetailsService.createTodoListDetails(newTodoListDetails);
    }

    @GetMapping("/viewTodoListDetails")
    public List<TodoListDetails> viewTodoListDetails() {
        return todoListDetailsService.viewTodoListDetails();
    }
    @PutMapping("/viewTodoListDetails/{todoListdetailsid}")
    public TodoListDetails toggleTaskCompletion(@PathVariable Long todoListdetailsid, @RequestParam("completed") Boolean completed,@RequestParam("hours") Double hours) {

        // Retrieve the task by ID
        TodoListDetails task = todoListDetailsService.getTodoListDetailsById(todoListdetailsid);

        // Toggle the completion status
        task.setCompleted(!completed);
        task.setWorkedHours(hours);
//        task.setCustomercompleted(completed);
        // Save the updated task
        return todoListDetailsService.createTodoListDetails(task);
    }

    @PutMapping("/ConfirmTodoListDetails/{todoListdetailsid}")
    public TodoListDetails toggleTaskCompletion(@PathVariable Long todoListdetailsid, @RequestParam("ccompleted") Boolean ccompleted) {
        // Retrieve the task by ID
        TodoListDetails task = todoListDetailsService.getTodoListDetailsById(todoListdetailsid);
        // Toggle the completion status
        task.setCustomercompleted(ccompleted);
        // Save the updated task
        return todoListDetailsService.createTodoListDetails(task);
    }


}