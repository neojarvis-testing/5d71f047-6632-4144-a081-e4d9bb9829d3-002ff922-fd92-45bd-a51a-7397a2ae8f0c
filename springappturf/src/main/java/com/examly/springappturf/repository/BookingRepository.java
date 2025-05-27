package com.examly.springappturf.repository;

import com.examly.springappturf.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUserId(Long userId);

    List<Booking> findByUserUserId(int userId);

    List<Booking> findByTurfTurfId(int turfId);
}
