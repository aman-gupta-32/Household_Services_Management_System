package com.app.DTO;

import com.app.entities.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class ProviderDTO extends BaseDTO {

	private Long id;
	private String spname;
    private String phoneno;
	private double rating;
	private double earnings;
}
