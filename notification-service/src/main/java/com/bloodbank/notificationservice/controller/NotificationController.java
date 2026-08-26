package com.bloodbank.notificationservice.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notify")
public class NotificationController {

    @PostMapping("/email")
    public String sendEmail(@RequestBody String message) {
        System.out.println("Sending Email: " + message);
        return "Email sent successfully";
    }

    @PostMapping("/sms")
    public String sendSms(@RequestBody String message) {
        System.out.println("Sending SMS: " + message);
        return "SMS sent successfully";
    }

    @PostMapping("/alerts")
    public String sendAlerts(@RequestBody String message) {
        System.out.println("Sending Alert: " + message);
        return "Alert sent successfully";
    }
}
