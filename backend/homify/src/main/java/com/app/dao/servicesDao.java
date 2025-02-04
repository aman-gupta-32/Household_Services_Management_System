package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Services;

public interface servicesDao extends JpaRepository<Services,Long> {

	
}
