package com.bloodbank.userauthservice.repository;

import com.bloodbank.userauthservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
