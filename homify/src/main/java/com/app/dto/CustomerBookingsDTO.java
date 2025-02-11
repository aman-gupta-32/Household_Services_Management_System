package com.app.dto;

import java.util.Date;
import java.util.List;

import com.app.entities.Services;
import com.app.entities.User;

import lombok.*;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class CustomerBookingsDTO extends BaseDTO {
	
	private Long customersId;
	private Long servicesId;
	private Long bookingSlot;
	private Date date;	
	
	
}
