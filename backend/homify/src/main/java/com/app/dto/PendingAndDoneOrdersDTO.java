package com.app.dto;

import java.util.List;

import com.app.entities.Services;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class PendingAndDoneOrdersDTO extends BaseDTO {

	private Long pending;
	private Long done;
}
