package com.app.DTO;

import java.util.Collection;

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
	

}
