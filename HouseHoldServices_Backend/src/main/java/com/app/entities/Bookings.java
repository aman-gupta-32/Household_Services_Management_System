package com.app.entities;



import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name="bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class Bookings extends BaseEntity{
	
	
	private Long bookingSlot;
	
	private Date date;
	
	private String status;
	
	@ManyToOne
	@JoinColumn(name="services_id")
	private Services services;
	
//	@ManyToOne
//	@JoinColumn(name="payment_id")
//	private Payments payment;
	
	@ManyToOne
	@JoinColumn(name="customer_id")
	private User customers;
	
	@ManyToOne
	@JoinColumn(name="serviceprovider_id")
	private User serviceprovider;
	

}
