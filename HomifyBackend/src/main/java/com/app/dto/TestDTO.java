package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)


public class TestDTO extends BaseDTO{

	 private String cname;
	 private String phNo;
	 private String address;
	 private String sname;
	 private String bstatus;
	 private Double price;
	 
	//  private String pstatus;
	public TestDTO(String cname, String phNo, String address) {
		super();
		this.cname = cname;
		this.phNo = phNo;
		this.address = address;
	}
	public TestDTO(String sname, Double price) {
		super();
		this.sname = sname;
		this.price = price;
	}

	
}
