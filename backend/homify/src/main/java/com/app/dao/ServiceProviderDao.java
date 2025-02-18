package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ServiceProvider;
import com.app.entities.UserEntity;

public interface ServiceProviderDao extends JpaRepository<ServiceProvider,Long>{


	ServiceProvider findByProviders(UserEntity sprovider);

	//List<ServiceProvider> findByIsActive();

	List<ServiceProvider> findByIsActive(String string);

}
