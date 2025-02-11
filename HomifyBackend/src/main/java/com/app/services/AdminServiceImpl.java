package com.app.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminDao;
import com.app.dao.BookingsDao;
import com.app.dao.ServiceProviderDao;
import com.app.dao.UserDao;
import com.app.dto.AServicepDTO;
import com.app.dto.ApiResponse;
import com.app.dto.TestDTO;
import com.app.entities.Bookings;
import com.app.entities.ServiceProvider;
import com.app.entities.User;

@Service 
@Transactional
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private BookingsDao bd;
	
	@Autowired
	private ServiceProviderDao spdao;
	
	@Autowired
	private UserDao ud;
	
	@Override
	public ApiResponse deleteServiceProviderbyId(Long Id) {
		
		String message = "id does not exist";
		if (ud.existsById(Id)) {
			//spdao.deleteById(Id);
			User user = ud.findById(Id).orElseThrow();
			ServiceProvider sp = spdao.findByProviders(user);
			sp.setIsActive("False");
			message =  "Deleted service provider details";
			}	
		return new ApiResponse(message);
	}
	
	  @Override
	   public List<AServicepDTO> getAllBookings() {
		  
	        List<AServicepDTO> dtoList = new ArrayList<>();
	        List<Bookings> bkngList = bd.findAll();

	        for (Bookings b : bkngList) {
	               AServicepDTO dto = new AServicepDTO();

	               dto.setSname(b.getServices().getName());
	               dto.setSpname(b.getServiceprovider().getName());
	            //   dto.setSpname(b.getServiceprovider().getServiceProvider().getName());
	               dto.setCname(b.getCustomers().getName());
	               dto.setSstatus(b.getStatus());
	               dto.setPrice(b.getServices().getPrice());
	             //  dto.setPstatus(b.getPayment().getStatus());
	               dtoList.add(dto);      
	        }
	               
	            return dtoList;   
	       }
	  
			  
		@Override
		public List<TestDTO> getAllCustomers() {
		    List<TestDTO> dtoList = new ArrayList<>();
		    List<Bookings> bookings = bd.findAll();
		
		    for (Bookings booking : bookings) {
		        TestDTO dto = new TestDTO();
		        
		        // Fetch Customer Details
		        dto.setCname(booking.getCustomers().getName());  // Assuming 'name' field in User entity
		        dto.setPhNo(booking.getCustomers().getPhone_no()); // Assuming 'phoneNumber' field in User entity
		        dto.setAddress(booking.getCustomers().getAddress());
		
		        // Fetch Service Details
		        dto.setSname(booking.getServices().getName());  // Assuming 'name' field in Service entity
		       // dto.setBstatus(booking.getServices().getstatus()); // Assuming 'status' field in Service entity
		        dto.setPrice(booking.getServices().getPrice());
		
		        // Fetch Payment Details
		        //  dto.setPstatus(booking.getPayment().getStatus());  // Assuming 'status' field in Payment entity
		
		        dtoList.add(dto);
		    }
		    return dtoList;

}
}
