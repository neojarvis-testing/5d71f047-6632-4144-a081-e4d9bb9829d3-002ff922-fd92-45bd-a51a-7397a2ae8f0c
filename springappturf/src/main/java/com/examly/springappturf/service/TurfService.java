package com.examly.springappturf.service;

import com.examly.springappturf.model.Turf;
import java.util.List;

public interface TurfService {
    Turf addTurf(Turf turf);
    Turf getTurfById(int turfId);
    List<Turf> getAllTurfs();
    Turf updateTurf(int turfId, Turf turfDetails);
    void deleteTurf(int turfId);
    List<Turf> searchTurfsByName(String name);
    List<Turf> searchTurfsByLocation(String location);
}