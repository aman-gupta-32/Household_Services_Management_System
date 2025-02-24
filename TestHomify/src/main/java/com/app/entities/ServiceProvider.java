package com.app.entities;

import jakarta.persistence.CascadeType;

//import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name="service_provider")
@Getter
@Setter

public class ServiceProvider extends BaseEntity{

		
		private Long exp;
		
		private double earnings;
		
		@ManyToOne
		@JoinColumn(name="customer_id")
		private User customer;
		
		@OneToOne
		@JoinColumn(name = "sp_id",nullable = false)
		private User providers;

		private String isActive;
		
//		public void findById(ServiceProvider serviceprovider2) {
//			// TODO Auto-generated method stub
//			
//		}
//		
		
//		@OneToMany
//		private List<Bookings> bid;
		
//		@OneToOne
//		private Payments pid;
		
//		@OneToMany
//		private List<Services> service_id;
		
//		@OneToOne
//		private Feedback feedback_id;
		
		
	
}
