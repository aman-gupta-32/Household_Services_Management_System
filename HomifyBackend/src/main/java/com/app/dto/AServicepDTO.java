package com.app.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString(callSuper = true)

public class AServicepDTO extends BaseDTO {

	  private String sname;
	    private String spname;
	    private String cname;
		private String sstatus;
		private String pstatus;
		private double price;
	
}
