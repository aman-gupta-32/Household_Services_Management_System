package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.LoginReqtDTO;
import com.app.dto.LoginRespDTO;
import com.app.entities.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Service 
@Transactional

public class LoginServicesImpl implements LoginServices {
	
	
	@Autowired
	UserDao ud;
	
	@Autowired
	JwtService jwtservice;
	
	
	 @Autowired
	 	private AuthenticationManager authManager;
	 
	@Override
	public LoginRespDTO login(LoginReqtDTO dto) {
		System.out.println(dto +" in services");
		
		if(ud.existsByEmailAndPassword(dto.getEmail(),dto.getPassword())) {
			UserEntity user  = ud.findByEmail(dto.getEmail()); 
			UserEntity user1 = ud.findByEmailAndPassword(dto.getEmail(),dto.getPassword());
	    System.out.println("user details "+user);
	    LoginRespDTO dtoresp = new LoginRespDTO();
	    
	    dtoresp.setId(user.getId());
	    dtoresp.setName(user.getName());
	    dtoresp.setRole(user.getRole());
	    dtoresp.setStatus("success");
	    
		return dtoresp;
		}
		else 
		{
			LoginRespDTO dtoresp = new LoginRespDTO();
			dtoresp.setStatus("failed");
			return dtoresp;
		}

}

	@Override
	public ApiResponse verify(LoginReqtDTO dto) {
		// TODO Auto-generated method stub
		System.out.println("verifying");
		String message ="fail";
		 Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword()));
		 System.out.println("is authenticated");
		   if (authentication.isAuthenticated()) {
			   message = jwtservice.generateToken(dto.getEmail());
		        return  new ApiResponse(message) ;
		        } 
		return new ApiResponse(message);
	}
}
