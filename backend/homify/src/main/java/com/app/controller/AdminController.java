package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.User;
import com.app.service.Adminservice;

@RestController
@RequestMapping("/manageserviceprovider")
public class AdminController {
	
	@Autowired
	private Adminservice adminService;
	
	
	@DeleteMapping("/{id}")
	public String deleteServiceProviderbyId(@PathVariable Long id) 
	{
	return	adminService.deleteServiceProviderbyId(id);
	}
	

}
