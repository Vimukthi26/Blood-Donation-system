package com.bloodbank.userauthservice.controller;

import com.bloodbank.userauthservice.model.User;
import com.bloodbank.userauthservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping
    public List<User> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public User create(@RequestBody User entity) {
        return repository.save(entity);
    }
}
