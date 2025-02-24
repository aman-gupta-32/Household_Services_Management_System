package com.app.dto;

import java.util.Date;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class CustomerSlotRespDTO extends BaseDTO{

	private Long bookingSlot;
	private Date date;
	private Long spId;
	
}
