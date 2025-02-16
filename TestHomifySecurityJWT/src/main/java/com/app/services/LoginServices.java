package com.app.services;

import com.app.dto.ApiResponse;
import com.app.dto.LoginReqtDTO;
import com.app.dto.LoginRespDTO;
import com.app.entities.UserEntity;

public interface LoginServices {

	LoginRespDTO login(LoginReqtDTO dto);
	
	ApiResponse verify(LoginReqtDTO dto);
	
}
