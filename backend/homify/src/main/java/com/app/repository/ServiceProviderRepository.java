package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ServiceProvider;

public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Long> {
//	Optional<ServiceProvider> findByEmail(String email);
//	boolean existsByEmail(String email);
	
	
}
