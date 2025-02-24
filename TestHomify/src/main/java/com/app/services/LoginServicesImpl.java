package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserDao;
import com.app.dto.LoginReqtDTO;
import com.app.dto.LoginRespDTO;
import com.app.entities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Service 
@Transactional

public class LoginServicesImpl implements LoginServices {
	
	
	@Autowired
	UserDao ud;
	
	@Override
	public LoginRespDTO login(LoginReqtDTO dto) {
		
		
		if(ud.existsByEmailAndPassword(dto.getEmail(),dto.getPassword())) {
	    User user  = ud.findByEmailAndPassword(dto.getEmail(),dto.getPassword()); 
	    
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
}
