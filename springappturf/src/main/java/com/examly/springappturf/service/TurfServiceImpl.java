package com.examly.springappturf.service;

import com.examly.springappturf.model.Turf;
import com.examly.springappturf.repository.TurfRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class TurfServiceImpl implements TurfService {
    @Autowired
    private TurfRepository turfRepo;

    @Override
    public Turf addTurf(Turf turf) {
        turf.setActive(true);
        return turfRepo.save(turf);
    }

    @Override
    public Turf getTurfById(int turfId) {
        return turfRepo.findById(turfId)
                .orElseThrow(() -> new RuntimeException("Turf not found"));
    }

    @Override
    public List<Turf> getAllTurfs() {
        return turfRepo.findAll();
    }

    @Override
    public Turf updateTurf(int turfId, Turf turfDetails) {
        Turf turf = getTurfById(turfId);
        turf.setName(turfDetails.getName());
        turf.setLocation(turfDetails.getLocation());
        turf.setPricePerHour(turfDetails.getPricePerHour());
        turf.setTurfType(turfDetails.getTurfType());
        return turfRepo.save(turf);
    }

    @Override
    public void deleteTurf(int turfId) {
        Turf turf = getTurfById(turfId);
        turfRepo.delete(turf);
    }

    @Override
    public List<Turf> searchTurfsByName(String name) {
        return turfRepo.findByNameContainingIgnoreCase(name);
    }

    @Override
    public List<Turf> searchTurfsByLocation(String location) {
        return turfRepo.findByLocationContainingIgnoreCase(location);
    }
}