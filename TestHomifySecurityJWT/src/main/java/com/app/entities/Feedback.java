package com.app.entities;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="feedback")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Feedback extends BaseEntity {
	
	private Long rating;
	
	@Column(length = 225)
	private String content;
	
	@ManyToOne
	@JoinColumn(name="customer_id")
	private UserEntity customers;
	
//	@ManyToOne
//	@JoinColumn(name="serviceprovider_id")
//	private ServiceProvider serviceprovider;

	@ManyToOne
	@JoinColumn(name="serviceprovider_id")
	private UserEntity serviceprovider;
	
	
	@OneToOne
	@JoinColumn(name="booking_id")
	private Bookings bookings;
	
	
}
