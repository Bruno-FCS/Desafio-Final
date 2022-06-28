package com.brunofernandes.apispringboot.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.brunofernandes.apispringboot.entities.VehicleData;
import com.brunofernandes.apispringboot.repositories.VehicleDataRepository;
import com.brunofernandes.apispringboot.services.exceptions.DatabaseException;
import com.brunofernandes.apispringboot.services.exceptions.ResourceNotFoundException;

@Service
public class VehicleDataService {

	@Autowired
	private VehicleDataRepository repository;

	public List<VehicleData> findAll() {
		return repository.findAll();
	}

	public VehicleData findById(Long id) {
		Optional<VehicleData> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	public VehicleData insert(VehicleData obj) {
		return repository.save(obj);
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(id);
		}
	}

	@SuppressWarnings("deprecation")
	public VehicleData update(Long id, VehicleData obj) {
		try {
			VehicleData entity = repository.getOne(id);
			List<VehicleData> list = this.findAll();
			for (VehicleData vd : list) {
				if (vd.getVehicledata_vin().equals(obj.getVehicledata_vin())) {
					if (vd.getVehicledata_id() == id) {
						UpdateData(entity, obj);
						return repository.save(entity);
					} else {
						throw new DatabaseException("VIN already registered");
					}
				}
			}
			UpdateData(entity, obj);
			return repository.save(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(id);
		}
	}

	private void UpdateData(VehicleData entity, VehicleData obj) {
		entity.setVehicledata_vin(obj.getVehicledata_vin());
		entity.setVehicledata_odometer(obj.getVehicledata_odometer());
		entity.setVehicledata_tirePressure(obj.getVehicledata_tirePressure());
		entity.setVehicledata_status(obj.getVehicledata_status());
		entity.setVehicledata_batteryStatus(obj.getVehicledata_batteryStatus());
		entity.setVehicledata_fuelLevel(obj.getVehicledata_fuelLevel());
		entity.setVehicledata_lat(obj.getVehicledata_lat());
		entity.setVehicledata_long(obj.getVehicledata_long());
	}
}
