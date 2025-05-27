package com.examly.springappturf.repository;

import com.examly.springappturf.model.Turf;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TurfRepository extends JpaRepository<Turf, Integer> {
    List<Turf> findByNameContainingIgnoreCase(String name);
    List<Turf> findByLocationContainingIgnoreCase(String location);
}