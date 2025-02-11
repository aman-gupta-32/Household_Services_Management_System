package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.*;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.CustomerBookingsDTO;
import com.app.dto.CustomerFeedbackDTO;
import com.app.dto.CustomerReqtDTO;
import com.app.dto.CustomerSlotRespDTO;
import com.app.dto.CustomerSlotRqstDTO;
import com.app.dto.ServiceProviderRespDTO;
import com.app.entities.Bookings;
import com.app.entities.Feedback;
import com.app.entities.ServiceProvider;
import com.app.entities.Services;
import com.app.entities.User;



@Service 
@Transactional
public class CustomerServicesImpl implements CustomerServices{

	
	@Autowired
	UserDao ud;
	
	@Autowired
	ServicesDao sd;
	
	@Autowired
	BookingsDao bkd;
	
	@Autowired
	FeedBackDao fbd;
	
	@Autowired
	ServiceProviderDao spd;
	
	@Autowired
	ModelMapper modelmapper;
	
	
	
	@Override
	public ApiResponse addCustomer(CustomerReqtDTO dto) {
		// TODO Auto-generated method stub
		String message = "customer registered";
		
		User customer = modelmapper.map(dto, User.class);
		
		ud.save(customer);
				
		return new ApiResponse(message);
	}
	
	
	@Override
	public ApiResponse updateProfile(CustomerReqtDTO dto, Long Id) {
		// TODO Auto-generated method stub
		String message = "customer profile not updated";
		
		if(ud.existsById(Id)) {
			
			User customer = ud.findById(Id).orElseThrow();
			modelmapper.map(dto, customer);
			ud.save(customer);
			message = "customer profile updated";
			
		}
		
		return new ApiResponse(message);
	}



	@Override
	public ApiResponse bookingService(CustomerBookingsDTO dto) {
		// TODO Auto-generated method stub
		
		String message = "bookings completed";
		Bookings bkng = new Bookings();
		User customer = ud.findById(dto.getCustomersId()).orElseThrow();
		Services service = sd.findById(dto.getServicesId()).orElseThrow();
		
		bkng.setBookingSlot(dto.getBookingSlot());
		bkng.setDate(dto.getDate());
		bkng.setCustomers(customer);
		bkng.setServices(service);
		bkng.setServiceprovider(service.getSprovider());
		bkng.setStatus("pending");
		bkd.save(bkng);
		
		ServiceProvider sp = spd.findByProviders(service.getSprovider());
//		if(sp.getEarnings() != 0) {
		sp.setEarnings((sp.getEarnings())+(bkng.getServices().getPrice()));
		sp.setExp((sp.getExp())+1);
		sp.setIsActive("true");
		sp.setProviders(service.getSprovider());
		sp.setCustomer(customer);
		spd.save(sp);
//		else {
//		ServiceProvider sp1 = new ServiceProvider();
//		sp1.setEarnings((bkng.getServices().getPrice()));
//		sp1.setExp(1);
//		sp1.setIsActive("true");
//		sp1.setProviders(service.getSprovider());
//		sp1.setCustomer(customer);
//		spd.save(sp1);
//		}
		return new ApiResponse(message);
	}

	@Override
	public ApiResponse customersFeedback(CustomerFeedbackDTO dto) {
		// TODO Auto-generated method stub
		String message = "feedback recevied";
		
		Feedback fb = new Feedback();
		User customer = ud.findById(dto.getCustomerId()).orElseThrow();
		User sp = ud.findById(dto.getServiceproviderId()).orElseThrow(); 
		Bookings bk = bkd.findById(dto.getBookingsId()).orElseThrow();
		
		fb.setRating(dto.getRating());
		fb.setContent(dto.getContent());
		fb.setCustomers(customer);
		fb.setServiceprovider(sp);
		fb.setBookings(bk);
		bk.setStatus("completed");
		fbd.save(fb);
		bkd.save(bk);
		//fb.getBookings().setStatus("completed");
		return new ApiResponse(message);
	}


	@Override
	public List<CustomerSlotRqstDTO> slotSelecting(CustomerSlotRespDTO dto) {
		// TODO Auto-generated method stub
		
		List<Bookings> lst=null;
		
		List<CustomerSlotRqstDTO> dtolist = null;
		
		CustomerSlotRqstDTO csrd = new CustomerSlotRqstDTO();
		
		ServiceProvider sp = spd.findById(dto.getServiceProviderId()).orElseThrow();
		
		if(bkd.existsByServiceproviderAndDateAndBookingSlot(sp,dto.getDate(),dto.getSlot()) != null) {
			
			 lst = bkd.findByServiceproviderAndDateAndBookingSlot(sp,dto.getDate(),dto.getSlot());
		}
			
		if(lst != null ) {
			
			for(Bookings b:lst) {
				csrd.setDate(b.getDate());
				csrd.setSlot(b.getBookingSlot());
				dtolist.add(csrd);
			}
			
		}
		return dtolist;
	}
	

}



//@Override
//public ApiResponse saveBookings(List<CustomerBookingsDTO> bookingRequests, Long Id) {
//	
//	System.out.println("saving");
//	
//	System.out.println(bookingRequests);
//    List<Bookings> bookings = bookingRequests.stream().map(request -> {
//        Bookings booking = new Bookings();
//       
//        System.out.println("step 1");
//        
//        User cst = cd.findById(Id).orElseThrow();
//        
//        System.out.println(request.getServicesId());
//
//        Services ser = sd.findById(request.getServicesId()).orElseThrow();
//        
//        System.out.println("step 3");
//
//        
//        booking.setBooking_slot(request.getBookingSlot());//setBookingSlot(request.getBookingSlot());
//        booking.setDate(request.getDate());
//        booking.setServices(ser);
//        booking.setCustomers(cst);
//        return booking;
//    }).collect(Collectors.toList());
//   System.out.println("entered the ata"); 
//   bd.saveAll(bookings);
//   System.out.println("saved the data");
//   return new ApiResponse("bookings done");
//}


