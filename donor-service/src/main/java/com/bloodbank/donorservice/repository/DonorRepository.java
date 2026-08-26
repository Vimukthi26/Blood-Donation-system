package com.bloodbank.donorservice.repository;

import com.bloodbank.donorservice.model.Donor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonorRepository extends JpaRepository<Donor, Long> {
}
