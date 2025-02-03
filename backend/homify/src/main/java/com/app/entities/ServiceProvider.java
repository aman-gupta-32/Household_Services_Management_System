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
@Table(name="service_provider")
@Getter
@Setter

public class ServiceProvider extends BaseEntity{

		@OneToMany
		private List<Services> service_id;
		@OneToOne
		private Feedback feedback_id;
		private int exp;
		@OneToOne
		private Customer cid;
		private double earnings;
		
		@OneToMany
		private List<Bookings> bid;
		@OneToOne
		private Payments pid;
		

		@ManyToOne
		@JoinColumn(name = "sp_id",nullable = false)
		private User serviceProvider;
		
		
	
}
