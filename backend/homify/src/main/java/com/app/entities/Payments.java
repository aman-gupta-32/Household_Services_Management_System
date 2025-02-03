package com.app.entities;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name="payments")
@Getter
@Setter


public class Payments extends BaseEntity {
	
	@OneToMany
	private List<Bookings> bid;
	
	private String status;
	private LocalDateTime day;
	private PaymentMode payment_mode;
	private double total_amt;
	
}
