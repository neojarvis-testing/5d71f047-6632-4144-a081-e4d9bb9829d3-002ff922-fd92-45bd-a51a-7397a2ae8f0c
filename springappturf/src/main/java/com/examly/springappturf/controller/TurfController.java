package com.examly.springappturf.controller;

import com.examly.springappturf.model.Turf;
import com.examly.springappturf.service.TurfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/turf")
public class TurfController {
    @Autowired
    private TurfService turfService;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Turf> addTurf(@RequestBody Turf turf) {
        return ResponseEntity.status(HttpStatus.CREATED).body(turfService.addTurf(turf));
    }

    @GetMapping("/{turfId}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Turf> getTurfById(@PathVariable int turfId) {
        return ResponseEntity.ok(turfService.getTurfById(turfId));
    }

    @GetMapping
    public ResponseEntity<List<Turf>> getAllTurfs() {
        return ResponseEntity.ok(turfService.getAllTurfs());
    }

    @PutMapping("/{turfId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Turf> updateTurf(@PathVariable int turfId, @RequestBody Turf turfDetails) {
        return ResponseEntity.ok(turfService.updateTurf(turfId, turfDetails));
    }

    @DeleteMapping("/{turfId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteTurf(@PathVariable int turfId) {
        turfService.deleteTurf(turfId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search/name/{name}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<List<Turf>> searchByName(@PathVariable String name) {
        return ResponseEntity.ok(turfService.searchTurfsByName(name));
    }

    @GetMapping("/search/location/{location}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<List<Turf>> searchByLocation(@PathVariable String location) {
        return ResponseEntity.ok(turfService.searchTurfsByLocation(location));
    }
}