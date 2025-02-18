package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.UserEntity;

public interface AdminDao extends JpaRepository<UserEntity , Long> {

}
