package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.User;
import com.app.service.Adminservice;

@RestController
@RequestMapping("/adminhome")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	
	@Autowired
	private Adminservice adminService;
	
	@GetMapping
	public List<User> getAllCustomers() {
		System.out.println("in get all Customers");
		return adminService.getAllCustomers();
	}
	
	@GetMapping
	public List<User> getAllServiceProviders()
	{
		System.out.println("in get all Service providers");

		return adminService.getAllServiceProviders();}
	

}
