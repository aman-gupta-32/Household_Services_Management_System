package com.blogs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.Adminservice;

@RestController
public class AdminController {
	
	@Autowired
	private Adminservice adminService;
	
	
	
	

}
