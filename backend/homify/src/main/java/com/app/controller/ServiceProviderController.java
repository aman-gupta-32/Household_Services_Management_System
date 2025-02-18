package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ServiceProviderDTO;
import com.app.service.ServiceProviderService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/signup")

public class ServiceProviderController {
	
	@Autowired
	private ServiceProviderService spService;
	
	
	
	@PostMapping
	@Operation(description = "User signup")
	public ResponseEntity<?> registerServiceProvider(@RequestBody @Valid ServiceProviderDTO dto) {
		System.out.println("register service provider "+dto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(spService.registerNewSP(dto));
		
	}
	
	
}
