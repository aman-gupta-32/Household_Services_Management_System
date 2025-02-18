package com.app.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Getter
@Setter
@ToString

public class ServiceProviderDTO {

	@NotBlank
	private String name;

	@Email
    private String email;
	
	@NotBlank
    private String phone_no;
	
	@NotBlank
    private String password;
	
	@NotBlank
    private String address;
}
