package com.brunofernandes.apispringboot.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vehicle implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long vehicle_id;

	@Column(nullable = false)
	private String vehicle_model;

	@Column(nullable = false)
	private Integer vehicle_totalVolume;

	@Column(nullable = false)
	private Integer vehicle_connected;

	@Column(nullable = false)
	private Integer vehicle_softwareUpdates;

	public Vehicle() {
	}

	public Vehicle(Long vehicle_id, String vehicle_model, Integer vehicle_totalVolume, Integer vehicle_connected,
			Integer vehicle_softwareUpdates) {
		super();
		this.vehicle_id = vehicle_id;
		this.vehicle_model = vehicle_model;
		this.vehicle_totalVolume = vehicle_totalVolume;
		this.vehicle_connected = vehicle_connected;
		this.vehicle_softwareUpdates = vehicle_softwareUpdates;
	}

	public Long getVehicle_id() {
		return vehicle_id;
	}

	public void setVehicle_id(Long vehicle_id) {
		this.vehicle_id = vehicle_id;
	}

	public String getVehicle_model() {
		return vehicle_model;
	}

	public void setVehicle_model(String vehicle_model) {
		this.vehicle_model = vehicle_model;
	}

	public Integer getVehicle_totalVolume() {
		return vehicle_totalVolume;
	}

	public void setVehicle_totalVolume(Integer vehicle_totalVolume) {
		this.vehicle_totalVolume = vehicle_totalVolume;
	}

	public Integer getVehicle_connected() {
		return vehicle_connected;
	}

	public void setVehicle_connected(Integer vehicle_connected) {
		this.vehicle_connected = vehicle_connected;
	}

	public Integer getVehicle_softwareUpdates() {
		return vehicle_softwareUpdates;
	}

	public void setVehicle_softwareUpdates(Integer vehicle_softwareUpdates) {
		this.vehicle_softwareUpdates = vehicle_softwareUpdates;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((vehicle_id == null) ? 0 : vehicle_id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Vehicle other = (Vehicle) obj;
		if (vehicle_id == null) {
			if (other.vehicle_id != null)
				return false;
		} else if (!vehicle_id.equals(other.vehicle_id))
			return false;
		return true;
	}
}
