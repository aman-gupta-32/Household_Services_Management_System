package com.app.entities;

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
	
	private int rating;
	
//	@ManyToOne
//	@JoinColumn(name="customer_id")
//	private User cutomers;
//	
	@ManyToOne
	@JoinColumn(name="serviceprovider_id")
	private ServiceProvider serviceprovider;

	@Column(length = 225)
	private String content;
	
	
}
