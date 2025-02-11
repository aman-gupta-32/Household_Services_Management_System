package com.app.services;

import java.util.List;

import com.app.dto.AServicepDTO;
import com.app.dto.ApiResponse;
import com.app.dto.TestDTO;

public interface AdminService {

	ApiResponse deleteServiceProviderbyId(Long service_id);
	
	List<AServicepDTO> getAllBookings();
	
	List<TestDTO> getAllCustomers(); 
	
	
	
	
}
