package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dto.APIResponse;
import com.app.dto.ServiceProviderDTO;
import com.app.entities.Role;
import com.app.entities.ServiceProvider;
import com.app.entities.User;
import com.app.repository.ServiceProviderRepository;

import jakarta.transaction.Transactional;



@Service
@Transactional

public class ServiceProviderServiceImpl implements ServiceProviderService {
	
	
	@Autowired
	private ServiceProviderRepository serviceProviderRepository;
	// model mapper
	@Autowired
	private ModelMapper modelMapper;
	//pwd encoder
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public APIResponse registerNewSP(ServiceProviderDTO dto) {
		// chk if user alrdy exists
		
		
		//if (serviceProviderRepository.existsByEmail(dto.getEmail()))
			 
			//throw new ApiException("User email already exists!!!!");
		// map dto -> entity
		ServiceProvider sp = modelMapper.map(dto,ServiceProvider.class);
			//ServiceProvider serviceProvider = modelMapper.map(dto, ServiceProvider.class);
		
		User user = new User();
		user.setName(dto.getName());
		user.setEmail(dto.getEmail());
		user.setPassword(passwordEncoder.encode(dto.getPassword()));
		user.setAddress(dto.getAddress());
	    //user.setRole(Role.SERVICE_PROVIDER);
		sp.setServiceProvider(user);
		
		//sp.getServiceProvider().setPassword(passwordEncoder.encode(sp.getServiceProvider().getPassword()));
		ServiceProvider savedUser = serviceProviderRepository.save(sp);
		return new APIResponse("User registered with ID " + savedUser.getServiceProvider().getId());
		
		
	}

}
