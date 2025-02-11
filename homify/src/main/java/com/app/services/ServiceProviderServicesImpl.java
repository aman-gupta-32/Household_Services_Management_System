package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.customexception.ResourceNotFoundException;
import com.app.dao.BookingsDao;
import com.app.dao.FeedBackDao;
//import com.app.dao.PayementDao;
import com.app.dao.ServiceProviderDao;
import com.app.dao.ServicesDao;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.BookingIDsDto;
import com.app.dto.JobsAndRatingDTO;
import com.app.dto.PendingAndDoneOrdersDTO;
import com.app.dto.PendingListDTO;
import com.app.dto.ServiceProviderRespDTO;
import com.app.dto.ServiceRespDTO;
//import com.app.dto.TestDTO;
import com.app.entities.*;



@Service 
@Transactional
public class ServiceProviderServicesImpl implements ServiceProviderServices  {

//
	@Autowired
	ServicesDao sd;
	
	@Autowired
	UserDao ud;
	
	//@Autowired
	//PayementDao pd;
	
	@Autowired
	BookingsDao bd;
	
	@Autowired
	ServiceProviderDao spd;
	
	@Autowired
	FeedBackDao fbd;
	
	@Autowired
	private ModelMapper modelMapper;
	
//	@Autowired
//	TestDTO td ;
	
	@Override
	public List<ServiceRespDTO> getAllServices() {
		return sd.findAll()
				.stream() 
				.map(services -> 
				modelMapper.map(services, 
						ServiceRespDTO.class))
				.collect(Collectors.toList());
	}

   
	@Override
	public ApiResponse addService( ServiceRespDTO dto ,Long Id) {
		
		String message = "Service added";
		ServiceProvider provider = spd.findById(Id).orElseThrow(() -> new ResourceNotFoundException("Invalid Category ID!!!"));

      Services service = new Services(); 
      service.setName(dto.getName());
      service.setPrice(dto.getPrice());
      service.setServiceprovider(provider);
      sd.save(service);
      return new ApiResponse(message);
	}

	@Override
	public ApiResponse deleteService(ServiceRespDTO dto ,Long Id) {
		// TODO Auto-generated method 
		
		String message = "Deletion not performed";
		ServiceProvider provider = spd.findById(Id).orElseThrow(() -> new ResourceNotFoundException("Invalid Category ID!!!"));
		 if(sd.existsByNameAndServiceprovider(dto.getName(),provider)) {
				 sd.deleteByNameAndServiceprovider(dto.getName(),provider);
				 message = "Deletion not performed";
		 }
		 
		return  new ApiResponse(message);
		
	
		
	}

	@Override
	public ApiResponse addServiceProvider(ServiceProviderRespDTO dto) {
		// TODO Auto-generated method stub
		String message =" added servive Provider";
		User user = new User();
		user.setAddress(dto.getAddress());
		user.setEmail(dto.getEmail());
		user.setName(dto.getName());
		user.setPassword(dto.getPassword());
		user.setPhone_no(dto.getPhone_no());
		user.setRole(dto.getRole());
		ud.save(user);
	    ServiceProvider sp = new ServiceProvider();
	    sp.setEarnings(dto.getEarnings());
	    sp.setExp(dto.getExp());
	    sp.setServiceProvider(user);
	    
	    spd.save(sp);
		return new ApiResponse(message);
	}
	
	@Override
	public ServiceProviderRespDTO displayProfile(Long Id) {
		// TODO Auto-generated method stub
		
		return null;
	}

	@Override
	public ApiResponse updateProfile(ServiceProviderRespDTO dto,Long Id) {
		// TODO Auto-generated method stub
		String message = "profile not updated";
		if(spd.existsById(Id)) {
			System.out.println(dto);
			ServiceProvider user = spd.findById(Id).orElseThrow();
			
			user.getServiceProvider().setAddress(dto.getAddress());
			user.getServiceProvider().setEmail(dto.getEmail());
			user.getServiceProvider().setName(dto.getName());
			user.getServiceProvider().setPassword(dto.getPassword());
			user.getServiceProvider().setPhone_no(dto.getPhone_no());
			user.getServiceProvider().setRole(dto.getRole());
			user.setEarnings(dto.getEarnings());
			user.setExp(dto.getExp());
			
		    
		    spd.save(user);
			message="profile updated";
		}
		return new ApiResponse(message);
	}


	@Override
	public Double bookings(BookingIDsDto dto) {
		// TODO Auto-generated method stub
		//ServiceProvider sp = new ServiceProvider();
		List<Long> lst = dto.getBid();
		for(Long lt:lst) {
			
			Services s = sd.findById(lt).orElseThrow();
			ServiceProvider sp=spd.findById(s.getServiceprovider().getId()).orElseThrow();
			sp.setEarnings(sp.getEarnings()+s.getPrice());
			spd.save(sp);
		}
		return 2.2d;
	}
	
	@Override
	public Double totalAmount(Long Id) {
		// TODO Auto-generated method stub
		ServiceProvider sp = spd.findById(Id).orElseThrow();
		Double amt = sp.getEarnings();
		return amt;
	}


	@Override
	public PendingAndDoneOrdersDTO ordersPendingDone(Long Id) {
		// TODO Auto-generated method stub
		List<Services> s = sd.findAllById(Id);
		PendingAndDoneOrdersDTO dto = new PendingAndDoneOrdersDTO();
		Long pcnt=0l;
		Long dcnt=0l;
		for(Services sr : s) {
			if(sr.getStatus().equals("pending")) {
				pcnt++;
			}
				dcnt++;
		}
		
		dto.setDone(dcnt);
		dto.setPending(pcnt);
		return dto;
	}


	@Override
	public JobsAndRatingDTO totalJobsAndRating(Long Id) {
		// TODO Auto-generated method stub
		List<Feedback> fb = fbd.findAll();
		JobsAndRatingDTO dto = new JobsAndRatingDTO();
		Long tjobs=0l;
		Double rating=0d;
		for(Feedback f: fb) {
			if(f.getServiceprovider().equals(Id)) {
				tjobs++;
				rating += f.getRating();
			}
		}
		dto.setRating(rating/tjobs);
		dto.setTotalJobs(tjobs);
		return dto;
	}
	
	@Override
	public PendingListDTO getPendingOrders(Long Id) {
		// TODO Auto-generated method stub
		
		PendingListDTO dto = new PendingListDTO();
		List<Bookings> bkngs = bd.findAllById(Id);
		for(Bookings b:bkngs) {
			if(b.getServices().getStatus()=="pending")
			{
				dto.setBookingSlot(b.getBookingSlot());
				dto.setDate(b.getDate());
				dto.setCustomer(b.getCustomers().getName());
				dto.setPrice(b.getServices().getPrice());
				dto.setName(b.getServices().getName());
			}
		}
		return dto;
	}



}



//@Override
////
//public Long totalJobs() {
//	// TODO Auto-generated method stub
//	return null;
//}
//
//@Override
//public Long rating() {
//	// TODO Auto-generated method stub
//	return null;
//}

//@Override
////DONE
//public Long ordersPending(Long Id) {
//	// TODO Auto-generated method stub
//	List<Services> s = sd.findAllById(Id);
//	Long cnt=0l;
//	for(Services sr : s) {
//		if(sr.getStatus().equals("pending")) {
//			cnt++;
//		}
//			
//	}
//	return cnt;
//}


//@Override
//public Long ordersDone() {
//	// TODO Auto-generated method stub
//	return null;
//}

//@Override
//public TestDTO getAllServices() {
//
//	 
//	 List<Bookings> bkng = bd.findAll();
//	 System.out.println(bkng);
//	 for(Bookings b:bkng) {
//		 td.setAddress(b.getCustomers().getAddress());
//		 td.setPstatus(b.getPayment().getStatus());
//		 td.setPrice(b.getServices().getPrice());
//	 }
//	
//	return td;
//	
//}

//Category transientCategory = 
//modelMapper.map(dto, Category.class);
//Category persistentCategory = categoryDao
//.save(transientCategory);
//return new ApiResponse("Added new catgroy with ID " 
//+ persistentCategory.getId());

//Services service = sd.findByName(dto.getName());
//if (service == null) {
//throw new IllegalArgumentException("Service provider not found");
//}
//
//modelMapper.map(dto, Services.class);






//serviceProviderRepository;
//
//public Service addService(String serviceName, Double price, String providerName) {
//    ServiceProvider provider = serviceProviderRepository.findByName(providerName);
//
//    if (provider == null) {
//        throw new IllegalArgumentException("Service provider not found");
//    }
//
//    Service service = new Service();
//    service.setServiceName(serviceName);
//    service.setPrice(price);
//    service.setProvider(provider);
//
//    return serviceRepository.save(service);
//
