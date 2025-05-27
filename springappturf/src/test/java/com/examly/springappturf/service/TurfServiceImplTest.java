package com.examly.springappturf.service;

import com.examly.springappturf.model.Turf;
import com.examly.springappturf.repository.TurfRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class TurfServiceImplTest {
    @Mock
    private TurfRepository turfRepo;

    @InjectMocks
    private TurfServiceImpl turfService;

    @Test
    public void testAddTurf() {
        Turf turf = new Turf();
        turf.setTurfId(1);
        turf.setName("Soccer Field");
        turf.setLocation("Downtown");
        turf.setPricePerHour(20.0);
        turf.setTurfType("Grass");

        when(turfRepo.save(any(Turf.class))).thenReturn(turf);

        Turf savedTurf = turfService.addTurf(turf);

        assertNotNull(savedTurf);
        assertEquals("Soccer Field", savedTurf.getName());
        assertEquals(20.0, savedTurf.getPricePerHour());
    }

    @Test
    public void testGetTurfById() {
        Turf turf = new Turf();
        turf.setTurfId(1);
        turf.setName("Football Turf");

        when(turfRepo.findById(1)).thenReturn(Optional.of(turf));

        Turf retrievedTurf = turfService.getTurfById(1);

        assertNotNull(retrievedTurf);
        assertEquals(1, retrievedTurf.getTurfId());
        assertEquals("Football Turf", retrievedTurf.getName());
    }

    @Test
    public void testUpdateTurf() {
        Turf turf = new Turf();
        turf.setTurfId(1);
        turf.setName("Old Turf");
        turf.setLocation("East Side");

        Turf updatedTurfDetails = new Turf();
        updatedTurfDetails.setName("Updated Turf");
        updatedTurfDetails.setLocation("West Side");

        when(turfRepo.findById(1)).thenReturn(Optional.of(turf));
        when(turfRepo.save(any(Turf.class))).thenReturn(updatedTurfDetails);

        Turf updatedTurf = turfService.updateTurf(1, updatedTurfDetails);

        assertNotNull(updatedTurf);
        assertEquals("Updated Turf", updatedTurf.getName());
        assertEquals("West Side", updatedTurf.getLocation());
    }

    @Test
    public void testDeleteTurf() {
        Turf turf = new Turf();
        turf.setTurfId(1);

        when(turfRepo.findById(1)).thenReturn(Optional.of(turf));
        doNothing().when(turfRepo).delete(turf);

        assertDoesNotThrow(() -> turfService.deleteTurf(1));
    }

    @Test
    public void testSearchTurfByName() {
        Turf turf = new Turf();
        turf.setTurfId(1);
        turf.setName("Basketball Court");

        List<Turf> turfList = Collections.singletonList(turf);

        when(turfRepo.findByNameContainingIgnoreCase("Basketball")).thenReturn(turfList);

        List<Turf> result = turfService.searchTurfsByName("Basketball");

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Basketball Court", result.get(0).getName());
    }
}