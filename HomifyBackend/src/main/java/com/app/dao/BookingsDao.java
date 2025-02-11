package com.app.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.CustomerSlotRqstDTO;
import com.app.entities.Bookings;
import com.app.entities.ServiceProvider;
import com.app.entities.User;

public interface BookingsDao extends JpaRepository<Bookings, Long> {

	List<Bookings> findAllById(Long id);

	List<Bookings> existsByServiceproviderAndDateAndBookingSlot(ServiceProvider sp, Date date, Long slot);

	List<Bookings> findByServiceproviderAndDateAndBookingSlot(ServiceProvider sp, Date date, Long slot);

	List<Bookings> findAllByServiceprovider(User serviceprovider);


}
