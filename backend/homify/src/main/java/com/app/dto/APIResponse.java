package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter

public class APIResponse {
	private LocalDateTime timeStamp;
	private String message;
	public APIResponse(String message) {
		super();
		this.timeStamp = LocalDateTime.now();
		this.message = message;
	}
	
	
}
