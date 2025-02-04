package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Services;
import com.app.service.Servicesservice;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/services")
public class ServicesController {

    @Autowired
    private Servicesservice servicesService;

    @PostMapping
    public String addNewService(@RequestBody Services services) {
        return servicesService.addNewService(services);
    }
}
