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
import com.app.dto.ADisplaySpDTO;
import com.app.dto.AServicepDTO;
import com.app.dto.ApiResponse;
import com.app.dto.ServicelistDTO;
import com.app.dto.TestDTO;
import com.app.entities.Bookings;
import com.app.entities.ServiceProvider;
import com.app.entities.UserEntity;

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
		
		
			
			ServiceProvider sp = spdao.findById(Id).orElseThrow(); // here we are getting service provider id
			sp.setIsActive("False");
			 
		return new ApiResponse("Deleted service provider details");
	}
	
	  @Override
	   public List<AServicepDTO> getAllBookings() {
		  
	        List<AServicepDTO> dtoList = new ArrayList<>();
	        List<Bookings> bkngList = bd.findAll();

	        for (Bookings b : bkngList) {
	               AServicepDTO dto = new AServicepDTO();

	               dto.setSname(b.getServices().getName());
	               dto.setSpname(b.getServiceprovider().getName());
	               dto.setCname(b.getCustomers().getName());
	               dto.setSstatus(b.getStatus());
	               dto.setPrice(b.getServices().getPrice());
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
		        
		        
		        dto.setCname(booking.getCustomers().getName());  
		        dto.setPhNo(booking.getCustomers().getPhone_no()); 
		        dto.setAddress(booking.getCustomers().getAddress());
		        dto.setSname(booking.getServices().getName());  
		        dto.setPrice(booking.getServices().getPrice());
		
		        dtoList.add(dto);
		    }
		    return dtoList;

}

		@Override
		public List<ADisplaySpDTO> displayAllServiceProvicers() {
			// TODO Auto-generated method stub
			List<ServiceProvider> lst = spdao.findByIsActive("true");
			List<ADisplaySpDTO> dtolst = new ArrayList<ADisplaySpDTO>();
			
			for(ServiceProvider s: lst) {
				ADisplaySpDTO dto = new ADisplaySpDTO();
				dto.setId(s.getId());    // taking serviceprovider table id because we using is active in this table
				dto.setName(s.getProviders().getName());
				dto.setEarnings(s.getEarnings());
				dto.setExp(s.getExp());
				dtolst.add(dto);
			}
						
			return dtolst;
		}

		@Override
		public List<ServicelistDTO> servicelist() {
			// TODO Auto-generated method stub
			
			List<ServicelistDTO> sl = new ArrayList<ServicelistDTO>();
			ServicelistDTO s = new ServicelistDTO();
			ServicelistDTO s1 = new ServicelistDTO();
			ServicelistDTO s2 = new ServicelistDTO();
			s.setName("HouseHold");
			s.setPrice(250.4);
			sl.add(s);
			s1.setName("Plumbing");
			s1.setPrice(550.4);
			sl.add(s1);
			s2.setName("Electricity");
			s2.setPrice(450.4);
			sl.add(s2);
			
			
			return sl;
		}
}
