package com.app.services;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.app.entities.UserEntity;


@Service
public class MyUserServiceDetatilsImpl implements UserDetails {

	@Autowired
	public UserEntity userEntity;
	
	public MyUserServiceDetatilsImpl(UserEntity userEntity) {
		super();
		this.userEntity = userEntity;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		//System.out.println(getAuthorities());
		return List.of
				(new SimpleGrantedAuthority(
						userEntity.getRole().name()));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return userEntity.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return userEntity.getEmail();
	}
	
	public UserEntity getUserEntity() {
		return userEntity;
	}


}
