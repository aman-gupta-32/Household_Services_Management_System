package com.app.service;
import java.util.List;


import com.app.entities.ServiceProvider;
import com.app.entities.Services;
import com.app.entities.User;

public interface Adminservice {
	List<User>getAllCustomers();
	List<User> getAllServiceProviders();
	String deleteServiceProviderbyId(Long service_id);
	String addNewService(Services services);
}
