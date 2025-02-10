package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.ProviderDTO;
import com.app.service.ServiceProviderservice;

@RestController
@RequestMapping("/service-providers")
public class ServiceProviderController1 {

    @Autowired
    private ServiceProviderservice serviceProviderService;

    @GetMapping
    public ResponseEntity<List<ProviderDTO>> getAllServiceProviders() {
        List<ProviderDTO> providerList = serviceProviderService.getAllServiceProvider();
        return providerList.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(providerList);
    }
}