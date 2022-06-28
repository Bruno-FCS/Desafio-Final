package com.brunofernandes.apispringboot.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.brunofernandes.apispringboot.entities.VehicleData;
import com.brunofernandes.apispringboot.services.VehicleDataService;

@RestController
@RequestMapping(value = "/vehiclesdata")
public class VehicleDataResource {

	@Autowired
	private VehicleDataService service;

	@GetMapping
	public ResponseEntity<List<VehicleData>> findAll() {
		List<VehicleData> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<VehicleData> findById(@PathVariable Long id) {
		VehicleData obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public ResponseEntity<VehicleData> insert(@RequestBody VehicleData obj) {
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getVehicledata_id())
				.toUri();
		return ResponseEntity.created(uri).body(obj);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<VehicleData> update(@PathVariable Long id, @RequestBody VehicleData obj) {
		obj = service.update(id, obj);
		return ResponseEntity.ok().body(obj);
	}
}
