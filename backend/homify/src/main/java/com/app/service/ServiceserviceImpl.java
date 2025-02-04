package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.servicesDao;
import com.app.entities.Services;

@Service
public class ServiceserviceImpl implements Servicesservice {

	@Autowired
	private servicesDao sdao;

	@Override
	public String addNewService(Services services) {
		sdao.save(services);
        return "Service added successfully with ID: " + services.getId();
	}

	@Override
	public List<Services> getAllServices() {
		
		return sdao.findAll();
	}
	
	

}
