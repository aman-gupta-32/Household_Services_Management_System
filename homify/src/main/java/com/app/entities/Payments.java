//package com.app.entities;
//
//import java.sql.Date;
//import java.time.LocalDateTime;
//import java.util.List;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//import jakarta.persistence.OneToMany;
//import jakarta.persistence.OneToOne;
//import jakarta.persistence.Table;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//
//@Entity
//@Table(name="payments")
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//
//public class Payments extends BaseEntity {
//	
////	@OneToMany
////	private List<Bookings> bid;
//	
//	private String status;
//	
//	private LocalDateTime day;
//	
//	private PaymentMode payment_mode;
//	
//	private double total_amt;
//	
//	
//	@ManyToOne
//	@JoinColumn(name="customer_id")
//	private User cutomers;
//	
//	@ManyToOne
//	@JoinColumn(name="serviceprovider_id")
//	private ServiceProvider serviceprovider;
//	
//}
