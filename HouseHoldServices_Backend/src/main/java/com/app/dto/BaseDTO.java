package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.*;

@Getter
@Setter
@ToString
public class BaseDTO {
	
	private Long id;
	
	private LocalDate createdOn;
	
	private LocalDateTime updatedOn;
}