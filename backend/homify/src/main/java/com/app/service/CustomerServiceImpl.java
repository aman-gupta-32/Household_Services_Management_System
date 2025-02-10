package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Bookings;

import com.app.DTO.TestDTO;
import com.app.dao.BookingsDao;
import com.app.entities.Bookings;

@Service
public class CustomerServiceImpl implements CustomerService {
	
@Autowired	
private BookingsDao bookingdao;

public List<TestDTO> getAllCustomers() {
    List<TestDTO> dtoList = new ArrayList<>();
    List<Bookings> bookings = bookingdao.findAll();

    for (Bookings booking : bookings) {
        TestDTO dto = new TestDTO();
        
        // Fetch Customer Details
        dto.setCname(booking.getCustomers().getName());  // Assuming 'name' field in User entity
        dto.setPhNo(booking.getCustomers().getPhone_no()); // Assuming 'phoneNumber' field in User entity
        dto.setAddress(booking.getCustomers().getAddress());

        // Fetch Service Details
        dto.setSname(booking.getServices().getName());  // Assuming 'name' field in Service entity
       // dto.setBstatus(booking.getServices().getstatus()); // Assuming 'status' field in Service entity
        dto.setPrice(booking.getServices().getPrice());

        // Fetch Payment Details
        dto.setPstatus(booking.getPayment().getStatus());  // Assuming 'status' field in Payment entity

        dtoList.add(dto);
    }
    return dtoList;
}

	
}
