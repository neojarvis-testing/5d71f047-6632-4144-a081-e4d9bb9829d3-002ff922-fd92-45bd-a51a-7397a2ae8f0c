package com.examly.springappuser.client.model;

import com.examly.springappuser.model.User;
import lombok.Data;

import java.time.LocalDate;

@Data
public class Feedback {
    private Long feedbackId;

    private String feedbackText;
    private int rating;
    private LocalDate date;
    private User user;
    private Turf turf;
}
