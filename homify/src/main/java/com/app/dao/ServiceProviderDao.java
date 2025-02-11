package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ServiceProvider;

public interface ServiceProviderDao extends JpaRepository<ServiceProvider,Long>{

}
