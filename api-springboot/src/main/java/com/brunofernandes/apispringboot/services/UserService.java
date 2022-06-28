package com.brunofernandes.apispringboot.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.brunofernandes.apispringboot.entities.User;
import com.brunofernandes.apispringboot.repositories.UserRepository;
import com.brunofernandes.apispringboot.services.exceptions.DatabaseException;
import com.brunofernandes.apispringboot.services.exceptions.ResourceNotFoundException;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public List<User> findAll() {
		return repository.findAll();
	}

	public User findById(Long id) {
		Optional<User> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	public User insert(User obj) {
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
	public User update(Long id, User obj) {
		try {
			User entity = repository.getOne(id);
			List<User> list = this.findAll();
			for (User u : list) {
				if (u.getUser_email().equals(obj.getUser_email()) || u.getUser_name().equals(obj.getUser_name())) {
					if (u.getUser_id() == id) {
						UpdateData(entity, obj);
						return repository.save(entity);
					} else {
						throw new DatabaseException("Email or username already registered");
					}
				}
			}
			UpdateData(entity, obj);
			return repository.save(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(id);
		}
	}

	private void UpdateData(User entity, User obj) {
		entity.setUser_name(obj.getUser_name());
		entity.setUser_email(obj.getUser_email());
		entity.setUser_password(obj.getUser_password());
		entity.setUser_fullName(obj.getUser_fullName());
	}
}
