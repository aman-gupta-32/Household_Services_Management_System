package com.app.entities;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="feedback")
@Getter
@Setter


public class Feedback extends BaseEntity {
	
	private int rating;
	@ManyToOne
	private Customer cid;

	@Column(length = 225)
	private String content;
	
	
}
