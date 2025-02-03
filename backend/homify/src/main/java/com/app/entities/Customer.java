package com.app.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="customer")
@Getter
@Setter


public class Customer extends BaseEntity {
	
	@OneToMany
	private List<Bookings> booking_id;
	
	
	@OneToMany
	@JoinColumn(name = "cid",nullable = false)
	private List<User> customer;
	

	@OneToOne
	private Payments payment_id;
	
	
}
