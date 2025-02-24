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
			ServicelistDTO s3 = new ServicelistDTO();
			ServicelistDTO s4 = new ServicelistDTO();
			ServicelistDTO s5 = new ServicelistDTO();
			s.setName("HouseHold");
			s.setPrice(250.4);
			s.setId(1l);
			sl.add(s);
			
			s1.setName("Plumbing");
			s1.setPrice(550.4);
			s1.setId(2l);
			sl.add(s1);
			
			s2.setName("Electricity");
			s2.setPrice(450.4);
			s2.setId(3l);
			sl.add(s2);
			
			s3.setName("BodyCare");
			s3.setPrice(440.4);
			s3.setId(4l);
			sl.add(s3);
			
			s4.setName("MedicalCare");
			s4.setPrice(600.48);
			s4.setId(5l);
			sl.add(s4);
			
			s5.setName("Painting");
			s5.setPrice(1000.4);
			s5.setId(6l);
			sl.add(s5);
			
			
			return sl;
		}
}
