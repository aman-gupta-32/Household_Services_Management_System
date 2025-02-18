package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.LoginReqtDTO;
import com.app.services.LoginServices;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")


public class LoginRegisterController {

	
	@Autowired
	LoginServices ls;
	
	@PostMapping
	public ResponseEntity<?> login(@RequestBody LoginReqtDTO dto){
		//System.out.println(dto);
		try {
			System.out.println("in controller");
			return ResponseEntity.ok(ls.verify(dto));
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse("Invalid Credentials"));
		}
	}
	
}
