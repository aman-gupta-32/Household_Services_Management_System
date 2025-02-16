package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.UserEntity;

public interface UserDao  extends JpaRepository<UserEntity, Long> {

	UserEntity findByEmailAndPassword(String email, String password);

	boolean existsByEmailAndPassword(String email, String password);

	UserEntity findByEmail(String email);

}
