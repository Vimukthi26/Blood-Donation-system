package com.bloodbank.requestservice.model;

import jakarta.persistence.*;

@Entity
@Table(name = "requests")
public class BloodRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String recipientName;
    private String bloodType;
    private String hospitalLocation;
    private String status;
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getRecipientName() { return recipientName; }
    public void setRecipientName(String recipientName) { this.recipientName = recipientName; }
    public String getBloodType() { return bloodType; }
    public void setBloodType(String bloodType) { this.bloodType = bloodType; }
    public String getHospitalLocation() { return hospitalLocation; }
    public void setHospitalLocation(String hospitalLocation) { this.hospitalLocation = hospitalLocation; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
