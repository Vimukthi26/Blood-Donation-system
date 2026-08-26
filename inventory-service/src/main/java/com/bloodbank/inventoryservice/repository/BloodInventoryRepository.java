package com.bloodbank.inventoryservice.repository;

import com.bloodbank.inventoryservice.model.BloodInventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BloodInventoryRepository extends JpaRepository<BloodInventory, Long> {
}
