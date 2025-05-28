package com.examly.springappturf.repository;

import com.examly.springappturf.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByUserUserId(int userId);

    List<Booking> findByTurfTurfId(int turfId);
}
