package com.app.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name="bookings")
@Getter
@Setter


public class Bookings extends BaseEntity{
	
	
	private int booking_slot;
	private Date date;

}
