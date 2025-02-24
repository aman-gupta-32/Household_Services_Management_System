package com.app.services;

import com.app.dto.LoginReqtDTO;
import com.app.dto.LoginRespDTO;

public interface LoginServices {

	LoginRespDTO login(LoginReqtDTO dto);
	
}
