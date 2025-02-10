package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Payments;

public interface PayementDao extends JpaRepository<Payments, Long> {

}
