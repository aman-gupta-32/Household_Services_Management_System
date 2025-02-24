package com.app.dto;


import com.app.entities.Role;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)

public class ServiceProviderRespDTO extends BaseDTO {
	
	private String name;
    private String email;
    private String phone_no;
    private String password;
    private String address;
	private Role role;
//	private int exp;
//	private double earnings;
	private String isActive; 
	
	
}
