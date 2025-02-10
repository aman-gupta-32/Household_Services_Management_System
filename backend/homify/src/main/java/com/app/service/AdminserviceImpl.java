package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.app.DTO.TestDTO;
import com.app.dao.AdminDao;
import com.app.dao.BookingsDao;
import com.app.dao.ServiceproviderDao;
import com.app.entities.Bookings;
import com.app.entities.User;


@Service
public class AdminserviceImpl implements Adminservice {
	
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private BookingsDao bd;
	
	@Autowired
	private ServiceproviderDao spdao;
	

	@Override
	public String deleteServiceProviderbyId(Long id) {
		if (spdao.existsById(id)) {
			spdao.deleteById(id);
			return "Deleted service provider details";
			}
		
		return "id does not exist";
	}
	}