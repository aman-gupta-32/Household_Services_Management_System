package com.app.service;
import java.util.List;


import com.app.entities.ServiceProvider;
import com.app.entities.User;

public interface Adminservice {
	List<User>getAllCustomers();
	List<ServiceProvider> getAllServiceProviders();
	String deleteServiceProviderbyId(Long service_id);
	
}
