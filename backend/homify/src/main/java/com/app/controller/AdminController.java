package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ADisplaySpDTO;
import com.app.dto.AServicepDTO;
import com.app.dto.ApiResponse;
import com.app.dto.ServiceRespDTO;
import com.app.dto.TestDTO;
import com.app.entities.UserEntity;
import com.app.services.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")

public class AdminController {
	
	@Autowired
	private AdminService adminService;
///admin/manageserviceprovider/2
	@DeleteMapping("/manageserviceprovider/{Id}")
	public ResponseEntity<?> deleteServiceProviderbyId(@PathVariable Long Id) 
	{
		System.out.println("Checking the Id");
		try {
			return ResponseEntity.ok(adminService.deleteServiceProviderbyId(Id));
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT)
					.body(new ApiResponse(e.getMessage()));
		}
	}
	
	
	@GetMapping("/serviceslist")
	public ResponseEntity<?> servicelist()
	{
		System.out.println("serviceslist returning");
		return ResponseEntity.ok(adminService.servicelist());
	}
	
	@GetMapping("/booking")
	public ResponseEntity<?> getAllBookings() {
		// TODO Auto-generated method stub
		System.out.println("getting all bookings");
		List<AServicepDTO> bookings =  adminService.getAllBookings();
		if (bookings.isEmpty()) {
			// SC 204
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} else {
			// SC 200 + list
			return ResponseEntity.ok(bookings);
		}
		//return ResponseEntity.ok(bookings);
		
	}
	
	
	@GetMapping("/displaycustomers")
	public ResponseEntity<?> getAllCustomers() {
		// TODO Auto-generated method stub
		System.out.println("getting all cutomers");
		List<TestDTO> customers =  adminService.getAllCustomers();
		if (customers.isEmpty()) {
			// SC 204
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} else {
			// SC 200 + list
			return ResponseEntity.ok(customers);
		}
		
	}
	
	@GetMapping("/manageserviceprovider")
	public ResponseEntity<?> displayServiceProviders(){
		
		System.out.println("getting all serviceproviders");
		List<ADisplaySpDTO> serviceproviders =adminService.displayAllServiceProvicers();
		if(serviceproviders.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}else {
			return ResponseEntity.ok(serviceproviders);
		}
	}
	
	

	

}
