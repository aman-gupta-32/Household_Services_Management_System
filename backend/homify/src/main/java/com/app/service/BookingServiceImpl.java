package com.app.service;

import java.util.ArrayList;
//import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.ServicepDTO;

import com.app.DTO.TestDTO;
import com.app.dao.BookingsDao;
import com.app.entities.Bookings;
import com.app.entities.ServiceProvider;

import jakarta.transaction.Transactional;



@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingsDao bd;
    
    @Override
    @Transactional
    public List<ServicepDTO> getAllBookings() {
        List<ServicepDTO> dtoList = new ArrayList<>();
        List<Bookings> bkngList = bd.findAll();

        for (Bookings b : bkngList) {
               ServicepDTO dto = new ServicepDTO();
               
               
               dto.setId(b.getId());
               dto.setCreatedOn(b.getCreatedOn());
               dto.setUpdatedOn(b.getUpdatedOn());               dto.setSname(b.getServices().getName());
               dto.setSpname(b.getServiceprovider().getServiceProvider().getName());
               dto.setCname(b.getCustomers().getName());
               dto.setSstatus(b.getServices().getStatus()); 
               dto.setPrice(b.getServices().getPrice());
               dto.setPstatus(b.getPayment().getStatus());
               dtoList.add(dto);      
        }
               
            return dtoList;   
            }
}