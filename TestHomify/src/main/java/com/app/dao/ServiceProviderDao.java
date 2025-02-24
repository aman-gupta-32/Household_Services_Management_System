package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ServiceProvider;
import com.app.entities.User;

public interface ServiceProviderDao extends JpaRepository<ServiceProvider,Long>{


	ServiceProvider findByProviders(User sprovider);

	//List<ServiceProvider> findByIsActive();

	List<ServiceProvider> findByIsActive(String string);

}
