package com.app.dto;

import com.app.entities.Role;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class LoginRespDTO {

	
	private Long Id;
	private String name;
	private Role role;
	private String status;
}
