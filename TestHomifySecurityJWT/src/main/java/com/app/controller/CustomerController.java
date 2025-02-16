package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.CDisplayServiceDTO;
import com.app.dto.CustomerBookingsDTO;
import com.app.dto.CustomerFeedbackDTO;
import com.app.dto.CustomerReqtDTO;
import com.app.dto.CustomerSlotRespDTO;
import com.app.dto.CustomerSlotRqstDTO;
import com.app.dto.ServiceProviderRespDTO;
import com.app.services.CustomerServices;

@RestController 
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

	@Autowired
	CustomerServices cs;
	

	@PostMapping("/register")
	public ResponseEntity<?> addCustomer(@RequestBody CustomerReqtDTO dto){
		System.out.println("adding service provider");
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(cs.addCustomer(dto));
		}catch (RuntimeException e) {
			return ResponseEntity.
					status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}
	}
	
	
	@PutMapping("/update/{Id}")
	public ResponseEntity<?>  updateProfile(@RequestBody CustomerReqtDTO dto, @PathVariable Long Id ) {
		// TODO Auto-generated method stub
		System.out.println("updating the profile");
		try {
			return ResponseEntity.ok(cs.updateProfile(dto,Id));
		}catch(RuntimeException e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}
	}
	
	
	
	@PostMapping("/booking")
	public ResponseEntity<?> bookingService(@RequestBody CustomerBookingsDTO dto ) {
		// TODO Auto-generated method stub
		System.out.println("booking sevice");
		try {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(cs.bookingService(dto));
					
		} catch (RuntimeException e) {
			return ResponseEntity.
					status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}
		
		
	}
	
	
	@GetMapping("/addtocart")
	public ResponseEntity<?> cDisplayServices(){
		System.out.println("getting the service and price id");
		try {
			return ResponseEntity.ok(cs.cDisplayServices());
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
	}
	
		@PostMapping("/feedback")
		public ResponseEntity<?> customersFeedback(@RequestBody CustomerFeedbackDTO dto){
		
			System.out.println("inserting feedback");
			try {
				return ResponseEntity.status(HttpStatus.CREATED)
						.body(cs.customersFeedback(dto)) ;
			}catch(RuntimeException e) {
				return ResponseEntity.
						status(HttpStatus.INTERNAL_SERVER_ERROR)
						.body(new ApiResponse(e.getMessage()));
			}
		}
		
	
		
//		@GetMapping("/bookings")
//		public ResponseEntity<?> slotSelecting(@RequestBody CustomerSlotRespDTO dto){
//			
//			System.out.println("verifying slot");
//			
//			List<CustomerSlotRqstDTO> lst = cs.slotSelecting(dto);
//			
//			if(lst != null) {
//				return ResponseEntity.ok(lst);
//			}else
//				return null;
//		}
		
		
		
}



