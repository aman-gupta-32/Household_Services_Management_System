package com.app.services;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.CustomerBookingsDTO;
import com.app.dto.CustomerFeedbackDTO;
import com.app.dto.CustomerReqtDTO;
import com.app.dto.CustomerSlotRespDTO;
import com.app.dto.CustomerSlotRqstDTO;
import com.app.dto.ServiceProviderRespDTO;

public interface CustomerServices {

	ApiResponse bookingService(CustomerBookingsDTO dto);

	ApiResponse customersFeedback(CustomerFeedbackDTO dto);

	ApiResponse addCustomer(CustomerReqtDTO dto);

	ApiResponse updateProfile(CustomerReqtDTO dto, Long Id);

	//List<CustomerSlotRqstDTO> slotSelecting(CustomerSlotRespDTO dto);
	
	//ApiResponse saveBookings(List<CustomerBookingsDTO> bookingRequests, Long Id);
}
