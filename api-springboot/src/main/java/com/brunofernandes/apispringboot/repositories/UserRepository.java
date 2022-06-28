package com.brunofernandes.apispringboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brunofernandes.apispringboot.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
