package com.app.dto;

import java.util.List;

import com.app.entities.Services;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class ServiceProviderProfileDTO {

	private String name;
    private String email;
    private String phone_no;
    private String address;
    private List<Services> service;
   
	
}
