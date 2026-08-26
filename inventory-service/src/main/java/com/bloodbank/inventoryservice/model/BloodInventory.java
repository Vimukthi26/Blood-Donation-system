package com.bloodbank.inventoryservice.model;

import jakarta.persistence.*;

@Entity
@Table(name = "inventory")
public class BloodInventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String bloodType;
    private Integer unitsAvailable;
    private String location;
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getBloodType() { return bloodType; }
    public void setBloodType(String bloodType) { this.bloodType = bloodType; }
    public Integer getUnitsAvailable() { return unitsAvailable; }
    public void setUnitsAvailable(Integer unitsAvailable) { this.unitsAvailable = unitsAvailable; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
}
