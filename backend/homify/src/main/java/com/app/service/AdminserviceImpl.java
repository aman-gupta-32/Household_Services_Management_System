//package com.app.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.app.dao.AdminDao;
//import com.app.entities.ServiceProvider;
//import com.app.entities.User;
//
//
//@Service
//public class AdminserviceImpl implements Adminservice {
//	
//	@Autowired
//	private AdminDao adminDao;
//
//	@Override
//	public List<User> getAllCustomers() {
//		return adminDao.findAll();
//	}
//
//	@Override
//	public List<ServiceProvider> getAllServiceProviders() {
//		
//		return adminDao.findAll();
//	}
//
//	@Override
//	public String deleteServiceProviderbyId(Long service_id) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	
//	
//	
//}