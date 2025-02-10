package com.app.entities;

import java.util.List;

import jakarta.persistence.CascadeType;

//import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "service_provider")
@Getter
@Setter
public class ServiceProvider extends BaseEntity{

		
		private int exp;
		
		@ManyToOne(fetch = FetchType.LAZY)
		@JoinColumn(name = "user_id") 
		 private User user;
		 
		private double earnings;
		
		@ManyToOne
		@JoinColumn(name="customer_id")
		private User customer;
		
		@OneToOne
		@JoinColumn(name = "sp_id",nullable = false)
		private User serviceProvider;

		 @OneToMany(mappedBy = "serviceprovider", cascade = CascadeType.ALL)
		private List<Feedback> feedbacks;
		 
    	public User getUser()
	   {
		return user;
     	}

		
}
