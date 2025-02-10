package com.app.DTO;

import java.util.Collection;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class servicesDTO extends BaseDTO {
	
	private String name;
	
	private double price;

	public Collection<ServiceRespDTO> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
}
