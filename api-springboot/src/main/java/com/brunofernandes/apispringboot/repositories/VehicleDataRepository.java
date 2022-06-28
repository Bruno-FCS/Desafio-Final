package com.brunofernandes.apispringboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brunofernandes.apispringboot.entities.VehicleData;

@Repository
public interface VehicleDataRepository extends JpaRepository<VehicleData, Long> {

}
