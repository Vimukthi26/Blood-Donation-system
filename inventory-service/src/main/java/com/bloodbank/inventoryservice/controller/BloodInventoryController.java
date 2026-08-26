package com.bloodbank.inventoryservice.controller;

import com.bloodbank.inventoryservice.model.BloodInventory;
import com.bloodbank.inventoryservice.repository.BloodInventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventory")
public class BloodInventoryController {

    @Autowired
    private BloodInventoryRepository repository;

    @GetMapping
    public List<BloodInventory> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public BloodInventory create(@RequestBody BloodInventory entity) {
        return repository.save(entity);
    }
}
