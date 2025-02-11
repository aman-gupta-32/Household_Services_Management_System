package com.app.dto;

import java.util.Date;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class PendingListDTO extends BaseDTO{

	private String name;
	private Double price;
	private Long bookingSlot;
	private Date date;
	private String customer;
}
