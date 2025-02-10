package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.TestDTO;
import com.app.service.CustomerService;
import com.app.service.CustomerServiceImpl;

@RestController
@RequestMapping("/customers")
public class CustomerController {
	@Autowired
	private CustomerServiceImpl customerservice;
	
	  @GetMapping
	  public ResponseEntity<List<TestDTO>> getAllCustomers() {
	        List<TestDTO> customers = customerservice.getAllCustomers();
	        return ResponseEntity.ok(customers);
	    }
	  
	}
