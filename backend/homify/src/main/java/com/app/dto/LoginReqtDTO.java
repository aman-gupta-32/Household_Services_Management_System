package com.app.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LoginReqtDTO {

	private String email;
	private String password;
	
}
