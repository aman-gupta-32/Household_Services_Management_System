package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.entities.UserEntity;

@Service
public class MyUserServiceDetailsServicesImpl implements UserDetailsService{

	
	@Autowired
	UserDao ud;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		System.out.println(email);
		UserEntity userEntity = ud.findByEmail(email);
		System.out.println(userEntity);
		
		if(userEntity == null) {
			throw new UsernameNotFoundException("user not found");
		}
		return new MyUserServiceDetatilsImpl(userEntity);
	}

	

}

