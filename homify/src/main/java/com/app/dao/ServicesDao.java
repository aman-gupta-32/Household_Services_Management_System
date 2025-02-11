package com.app.dao;

import com.app.entities.*;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesDao extends JpaRepository<Services, Long>{

	Services findByName(String name);

	boolean existsByNameAndServiceprovider(String name, ServiceProvider provider);

	void deleteByNameAndServiceprovider(String name,ServiceProvider provider);

	List<Services> findAllById(Long id);

//	Services findbyNameandServiceprovider(String name, Long id);
//
//	void deletebyNameandServiceprovider(String name, Long id);
//
//	
//	boolean existsByNameandServiceprovider(String name, Long id);

}
