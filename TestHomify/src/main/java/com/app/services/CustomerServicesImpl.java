package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.*;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.CDisplayServiceDTO;
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
		String dates ="";
		List<Bookings> lst=new ArrayList<Bookings>();
		Bookings bkng = new Bookings();
		User customer = ud.findById(dto.getCustomersId()).orElseThrow();
		Services service = sd.findById(dto.getServicesId()).orElseThrow();
		
		bkng.setBookingSlot(dto.getBookingSlot());
		bkng.setDate(dto.getDate());
		bkng.setCustomers(customer);
		bkng.setServices(service);
		bkng.setServiceprovider(service.getSprovider());
		bkng.setStatus("pending");
//		if(bkd.existsByServiceproviderAndDateAndBookingSlot(service.getSprovider(),dto.getDate(),dto.getBookingSlot()))//!= null) {
//			{ 
//			System.out.println("booking slot");
//			lst = bkd.findByServiceproviderAndDateAndBookingSlot(service.getSprovider(),dto.getDate(),dto.getBookingSlot());
//			for(Bookings b:lst) {
//				dates +=(b.getDate()+" "+b.getBookingSlot()+"__________");
//			}
//			return new ApiResponse("please select other booking slot and date other than this:             "+dates);
//			}
			
			// lst = bkd.findByServiceproviderAndDateAndBookingSlot(service,dto.getDate(),dto.getBookingSlot());
		

		bkd.save(bkng);
		
//		ServiceProvider sp = spd.findByProviders(service.getSprovider());
////		if(sp.getEarnings() != 0) {
//		sp.setEarnings((sp.getEarnings())+(bkng.getServices().getPrice()));
//		sp.setExp((sp.getExp())+1);
//		sp.setIsActive("true");
//		sp.setProviders(service.getSprovider());
//		sp.setCustomer(customer);
//		spd.save(sp);
//		
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
		User customer = ud.findById(dto.getCustomersId()).orElseThrow();
		User sp1 = ud.findById(dto.getSpId()).orElseThrow();
		Services ser = sd.findById(dto.getServicesId()).orElseThrow();
		//Bookings bk = bkd.findById(dto.getBookingsId()).orElseThrow();
		Bookings bkng = bkd.findByCustomersAndServiceproviderAndServices(customer,sp1,ser);

	
		
		//System.out.println(bk.getServices().getPrice());
		ServiceProvider sp = spd.findByProviders(sp1);
		// if(sp.getEarnings() != 0) {
		sp.setEarnings((sp.getEarnings())+(ser.getPrice()));
		sp.setExp((sp.getExp())+1);
		sp.setIsActive("true");
		sp.setProviders(sp1);
		sp.setCustomer(customer);
		spd.save(sp);
		
		fb.setRating(dto.getRating());
		fb.setContent(dto.getContent());
		fb.setCustomers(customer);
		fb.setServiceprovider(sp1);
		fb.setBookings(bkng);
		bkng.setStatus("completed");
		fbd.save(fb);
		bkd.save(bkng);
		//fb.getBookings().setStatus("completed");
		return new ApiResponse(message);
	}


	@Override
	public List<CDisplayServiceDTO> cDisplayServices() {
		// TODO Auto-generated method stub
		List<CDisplayServiceDTO> lstdto = new ArrayList<CDisplayServiceDTO>();
		List<Services> servicelts = sd.findAll();
		
		for(Services s: servicelts) {
			
			CDisplayServiceDTO dto = new CDisplayServiceDTO();
			dto.setPrice(s.getPrice());
			dto.setSname(s.getName());
			dto.setSId(s.getId());
			dto.setSpname(s.getSprovider().getName());
			dto.setSpId(s.getSprovider().getId());
			lstdto.add(dto);
		}
		
		
		
		return lstdto;
	}


	@Override
	public ApiResponse slotChecking(CustomerSlotRespDTO dto) {
		// TODO Auto-generated method stub
		String dates ="";
		List<Bookings> lst=new ArrayList<Bookings>();
		Bookings bkng = new Bookings();
		User serviceprovide = ud.findById(dto.getSpId()).orElseThrow();
		//Services service = sd.findById(dto.getServicesId()).orElseThrow();
		
		if(bkd.existsByServiceproviderAndDateAndBookingSlotAndStatus(serviceprovide,dto.getDate(),dto.getBookingSlot(),"pending"))//!= null) {
		{ 
		System.out.println("booking slot");
		lst = bkd.findByServiceproviderAndDateAndBookingSlotAndStatus(serviceprovide,dto.getDate(),dto.getBookingSlot(),"pending");
		for(Bookings b:lst) {
			dates +=(b.getDate()+" "+b.getBookingSlot()+"__________");
		}
		return new ApiResponse("please select other booking slot and date other than this:             "+dates);
		}
		
		else {
			return new ApiResponse("confirm booking");
		}
//		List<Bookings> lst=null;
//		
//		List<CustomerSlotRqstDTO> dtolist = null;
//		
//		CustomerSlotRqstDTO csrd = new CustomerSlotRqstDTO();
//		
//		ServiceProvider sp = spd.findById(dto.getServiceProviderId()).orElseThrow();
//		
//		if(bkd.existsByServiceproviderAndDateAndBookingSlot(sp,dto.getDate(),dto.getSlot()) != null) {
//			
//			 lst = bkd.findByServiceproviderAndDateAndBookingSlot(sp,dto.getDate(),dto.getSlot());
//		}
//			
//		if(lst != null ) {
//			
//			for(Bookings b:lst) {
//				csrd.setDate(b.getDate());
//				csrd.setSlot(b.getBookingSlot());
//				dtolist.add(csrd);
//			}
//			
//		}
//		return dtolist;
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


