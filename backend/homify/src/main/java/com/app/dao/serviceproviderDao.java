package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ServiceProvider;

public interface  serviceproviderDao extends JpaRepository<ServiceProvider,Long>{

}
