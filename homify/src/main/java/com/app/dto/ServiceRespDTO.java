package com.app.dto;

import lombok.*;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)

public class ServiceRespDTO extends BaseDTO{	
	
	private String name;
	
	private double price;

	public ServiceRespDTO(String name, double price) {
		super();
		this.name = name;
		this.price = price;
	}
	
	public ServiceRespDTO(String name) {
		super();
		this.name = name;
		//this.price = price;
	}
}
