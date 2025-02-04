package com.app.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name="services")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Services extends BaseEntity{

	private String name;
	
	private double price;
	
	@ManyToOne
	@JoinColumn(name="serviceprovider_id")
	private ServiceProvider serviceprovider;
	
//	@ManyToOne
//	@JoinColumn(name="customer_id")
//	private User customer;
	
}
