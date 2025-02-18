package com.app.entities;

import jakarta.persistence.CascadeType;

//import java.util.List;

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
@Table(name="service_provider")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class ServiceProvider extends BaseEntity{

		
		private Long exp;
		
		private double earnings;
		
		@ManyToOne
		@JoinColumn(name="customer_id")
		private UserEntity customer;
		
		@OneToOne
		@JoinColumn(name = "sp_id",nullable = false)
		private UserEntity providers;

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
