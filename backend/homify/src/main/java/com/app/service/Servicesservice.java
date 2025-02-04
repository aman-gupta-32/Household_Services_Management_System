package com.app.service;

import java.util.List;

import com.app.entities.Services;

public interface Servicesservice {
	String addNewService(Services services);
	List<Services> getAllServices();
	
}
