package com.app.services;

import java.util.List;

import com.app.dto.*;
import com.app.entities.*;

public interface ServiceProviderServices {

	List<ServiceRespDTO>  getAllServices();
	
	ApiResponse addService ( ServiceRespDTO dto ,Long Id);
	
	ApiResponse deleteService(ServiceRespDTO dto ,Long Id);
	
	ServiceProviderRespDTO displayProfile(Long Id);
	
	ApiResponse updateProfile(ServiceProviderRespDTO dto,Long Id);
	
	Double totalAmount(Long Id);
	
	PendingAndDoneOrdersDTO ordersPendingDone(Long Id);
	
	JobsAndRatingDTO totalJobsAndRating(Long Id);
	
	PendingListDTO getPendingOrders(Long Id);

	ApiResponse addServiceProvider(ServiceProviderRespDTO dto);

	Double bookings(BookingIDsDto dto);
	
	//Long ordersPending(Long Id);

	//Long ordersDone();
	
	//	Long totalJobs();
		
	//	Long rating();
}
