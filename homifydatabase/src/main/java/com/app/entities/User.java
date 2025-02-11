package com.app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter

public class User extends BaseEntity {
	
	
	private String name;
    private String email;
    private String phone_no;
    private String password;
    private String address;
   
	@Enumerated(EnumType.STRING)
	private Role role;
    
    

	
}