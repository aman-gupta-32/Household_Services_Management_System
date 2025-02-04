package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminDao;
import com.app.dao.serviceproviderDao;
import com.app.dao.servicesDao;
import com.app.entities.ServiceProvider;
import com.app.entities.Services;
import com.app.entities.User;


@Service
public class AdminserviceImpl implements Adminservice {
	
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private serviceproviderDao spdao;

	@Autowired
	private servicesDao sdao;

	@Override
	public List<User> getAllCustomers() {
		return adminDao.findAll();
	}

	@Override
	public List<User> getAllServiceProviders() {
		
		return adminDao.findAll();

	}

	@Override
	public String deleteServiceProviderbyId(Long id) {
		if (spdao.existsById(id)) {
			spdao.deleteById(id);
			return "Deleted service provider details";
			}
		
		return "id does not exist";
	}

	@Override
	public String addNewService(Services services) {

		servicesDao.save(services);	
		return "Service added successfully with ID: " + services.getId();
    }

	@Override
	public List<Services> getAllServices() {

		
		return null;
	}
	}