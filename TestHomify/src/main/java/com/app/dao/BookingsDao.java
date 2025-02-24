package com.app.dao;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.CustomerSlotRqstDTO;
import com.app.entities.Bookings;
import com.app.entities.ServiceProvider;
import com.app.entities.Services;
import com.app.entities.User;

public interface BookingsDao extends JpaRepository<Bookings, Long> {

	List<Bookings> findAllById(Long id);

	Boolean existsByServiceproviderAndDateAndBookingSlotAndStatus(User user, Date date, Long slot,String str);

	List<Bookings> findByServiceproviderAndDateAndBookingSlotAndStatus(User user, Date date, Long slot,String str);

	List<Bookings> findAllByServiceprovider(User serviceprovider);

	Bookings findByCustomersAndServiceproviderAndServices(User customer, User sp1, Services ser);


}
