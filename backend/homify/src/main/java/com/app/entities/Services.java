package com.app.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;
import lombok.Setter;

@Entity
@Table(name="services")
@Getter
@Setter


public class Services extends BaseEntity{

	private String name;
	private double price;
	
	
	
}
