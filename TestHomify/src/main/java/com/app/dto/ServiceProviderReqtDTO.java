
package com.app.dto;

import com.app.entities.Role;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor


public class ServiceProviderReqtDTO extends BaseDTO{
	
	private String name;
    private String email;
    private String phone_no;
    private String password;
    private String address;
	private String role;
	
	
}