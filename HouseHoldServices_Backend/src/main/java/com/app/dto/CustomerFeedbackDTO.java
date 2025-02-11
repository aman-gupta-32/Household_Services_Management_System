package com.app.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class CustomerFeedbackDTO extends BaseDTO{

	private Long rating;
	private String content;
	private Long customerId;
	private Long serviceproviderId;
	private Long bookingsId;
}
