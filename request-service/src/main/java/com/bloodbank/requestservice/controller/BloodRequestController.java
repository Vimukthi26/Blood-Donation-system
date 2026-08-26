package com.bloodbank.requestservice.controller;

import com.bloodbank.requestservice.model.BloodRequest;
import com.bloodbank.requestservice.repository.BloodRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/requests")
public class BloodRequestController {

    @Autowired
    private BloodRequestRepository repository;

    @GetMapping
    public List<BloodRequest> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public BloodRequest create(@RequestBody BloodRequest entity) {
        return repository.save(entity);
    }
}
