package com.app.dto;

import java.util.List;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class BookingIDsDto extends BaseDTO{
	
	private List<Long> bid;
	
}
