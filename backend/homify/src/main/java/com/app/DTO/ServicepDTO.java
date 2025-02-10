package com.app.DTO;

import com.app.entities.Bookings;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class ServicepDTO extends BaseDTO {
	
    private String sname;
    private String spname;
    private String cname;
	private String sstatus;
	private String pstatus;
	private double price;


}
