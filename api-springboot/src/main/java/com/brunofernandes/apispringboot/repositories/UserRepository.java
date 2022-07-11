package com.brunofernandes.apispringboot.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.brunofernandes.apispringboot.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@Query(value = "SELECT * FROM User u WHERE u.user_name = ?1 AND u.user_password = ?2", nativeQuery = true)
	public Optional<User> findByNameAndPassword(String user_name, String user_password);
}
