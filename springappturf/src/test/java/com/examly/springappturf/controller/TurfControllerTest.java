package com.examly.springappturf.controller;

import com.examly.springappturf.model.Turf;
import com.examly.springappturf.service.TurfService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class TurfControllerTest {
    @Mock
    private TurfService turfService;

    @InjectMocks
    private TurfController turfController;

    @Test
    public void testAddTurf() {
        Turf turf = new Turf();
        turf.setTurfId(1);
        turf.setName("Soccer Field");

        when(turfService.addTurf(any(Turf.class))).thenReturn(turf);

        ResponseEntity<Turf> response = turfController.addTurf(turf);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("Soccer Field", response.getBody().getName());
    }

    @Test
    public void testGetTurfById() {
        Turf turf = new Turf();
        turf.setTurfId(1);
        turf.setName("Football Turf");

        when(turfService.getTurfById(1)).thenReturn(turf);

        ResponseEntity<Turf> response = turfController.getTurfById(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("Football Turf", response.getBody().getName());
    }

    @Test
    public void testSearchByName() {
        Turf turf = new Turf();
        turf.setTurfId(1);
        turf.setName("Basketball Court");

        List<Turf> turfList = Collections.singletonList(turf);

        when(turfService.searchTurfsByName("Basketball")).thenReturn(turfList);

        ResponseEntity<List<Turf>> response = turfController.searchByName("Basketball");

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals(1, response.getBody().size());
    }
}