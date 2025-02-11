package com.app.dao;

import com.app.entities.*;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesDao extends JpaRepository<Services, Long>{

	Services findByName(String name);

	boolean existsByNameAndSprovider(String name, User serviceprovider);

	void deleteByNameAndSprovider(String name,ServiceProvider provider);

	List<Services> findAllById(Long id);

	Services findByNameAndSprovider(String name, User serviceprovider);

}
