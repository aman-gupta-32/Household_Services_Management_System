package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AmountDTO;
import com.app.dto.ApiResponse;
import com.app.dto.BookingIDsDto;
import com.app.dto.CustomerReqtDTO;
import com.app.dto.PendingListDTO;
import com.app.dto.ServiceProviderProfileDTO;
import com.app.dto.ServiceProviderReqtDTO;
import com.app.dto.ServiceProviderRespDTO;
import com.app.dto.ServiceRespDTO;
//import com.app.dto.TestDTO;
import com.app.entities.Bookings;
import com.app.entities.Services;
import com.app.entities.User;
import com.app.services.ServiceProviderServices;



@RestController 
@RequestMapping("/serviceprovider")
@CrossOrigin(origins = "http://localhost:3000")

public class ServiceProviderController {

	@Autowired
	private ServiceProviderServices sps; 
	
	@GetMapping
	public ResponseEntity<?> getAllServices() {
		// TODO Auto-generated method stub
		System.out.println("in get all categories");
		List<ServiceRespDTO> services =  sps.getAllServices();
		if (services.isEmpty()) {
			// SC 204
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} else {
			// SC 200 + list
			return ResponseEntity.ok(services);
		}
		
	}

	
	@PostMapping("/{Id}")
	public ResponseEntity<?> addService(@RequestBody ServiceRespDTO dto , @PathVariable Long Id) {
		// TODO Auto-generated method stub
		System.out.println("adding sevice");
		try {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(sps.addService(dto,Id));
					
		} catch (RuntimeException e) {
			return ResponseEntity.
					status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}
		
	}

	@DeleteMapping("/delete/{Id}")  //serviceprovider id in user table
	public ResponseEntity<?> deleteService(@RequestBody ServiceRespDTO dto, @PathVariable Long Id) {
		// TODO Auto-generated method stub
		System.out.println("deleting service");
		try {
			return ResponseEntity.ok(sps.deleteService(dto,Id));
					
		} catch (RuntimeException e) {
			return ResponseEntity.
					status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}
	}


	
	@PostMapping("/register")
	public ResponseEntity<?> addServiceProvider(@RequestBody ServiceProviderRespDTO dto){
		System.out.println("adding service provider");
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(sps.addServiceProvider(dto));
		}catch (RuntimeException e) {
			return ResponseEntity.
					status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}
	}
	
	
	@GetMapping("/profile/{Id}")
	public ResponseEntity<?> displayProfile(@PathVariable Long Id  ) {
		// TODO Auto-generated method stub
		System.out.println("fetching the profile");
		ServiceProviderProfileDTO spp = sps.displayProfile(Id);
		if(spp != null) {
			return ResponseEntity.ok(spp);
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

	@PutMapping("/update/{Id}")
	public ResponseEntity<?>  updateProfile(@RequestBody ServiceProviderRespDTO dto, @PathVariable Long Id ) {
		// TODO Auto-generated method stub
		System.out.println("updating the profile");
		try {
			return ResponseEntity.ok(sps.updateProfile(dto,Id));
		}catch(RuntimeException e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}
	}

	@GetMapping("/totalamount/{Id}")
	public ResponseEntity<AmountDTO> totalAmount(@PathVariable Long Id) {
		// TODO Auto-generated method stub
		System.out.println("finding total amount");
		AmountDTO amt = sps.totalAmount(Id);
		if(amt.getAmount() > 0) {
			return ResponseEntity.ok(amt);
		}
		else {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
	}
	//ResponseEntity<?>
//	@GetMapping("/booking")
//	public  Double bookings(@RequestBody BookingIDsDto dto){
//		System.out.println("reading the Id ");
//		return sps.bookings(dto);
//		
//	}
	
	@GetMapping("/orders/{Id}")
	public ResponseEntity<?>   ordersPendingDone(@PathVariable Long Id) {
		// TODO Auto-generated method stub
		try {
			return ResponseEntity.ok(sps.ordersPendingDone(Id));
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		
	}

	@GetMapping("/jobs/{Id}")
	public ResponseEntity<?> totalJobsAndRating(@PathVariable Long Id) {
		// TODO Auto-generated method stub
		try {
			return ResponseEntity.ok(sps.totalJobsAndRating(Id));
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		
	}
	
	@GetMapping("/porders/{Id}")
	public ResponseEntity<?> getPendingOrders(@PathVariable Long Id) {
		// TODO Auto-generated method stub
		List<PendingListDTO> pending = sps.getPendingOrders(Id);
		if (pending == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} else {
			return ResponseEntity.ok(pending);
		}
	}
	
}
