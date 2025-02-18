package com.app.service;

import com.app.dto.APIResponse;
import com.app.dto.ServiceProviderDTO;


public interface ServiceProviderService {
	APIResponse registerNewSP(ServiceProviderDTO dto);
}


