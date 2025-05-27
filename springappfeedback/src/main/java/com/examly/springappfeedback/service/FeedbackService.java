package com.examly.springappfeedback.service;

import com.examly.springappfeedback.model.Feedback;

import java.util.List;

public interface FeedbackService {
    Feedback addFeedback(Feedback feedback);
    List<Feedback> getAllFeedbacks();
    Feedback getFeedbackById(int id);
    Feedback updateFeedback(int id, Feedback feedbackDetails);
    void deleteFeedback(int id);
    List<Feedback> getFeedbacksByUserId(int userId);
    List<Feedback> getFeedbacksByTurfId(Long turfId);
    List<Feedback> getFeedbacksByUserIdAndTurfId(Long userId, Long turfId);
    List<Feedback> getFeedbacksByRating(int rating);

}