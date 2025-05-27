package com.examly.springappfeedback.service;

import com.examly.springappfeedback.model.Feedback;
import com.examly.springappfeedback.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackServiceImpl implements FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;

    @Override
    public Feedback addFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    @Override
    public Feedback getFeedbackById(int id) {
        return feedbackRepository.findById((long) id)
                .orElseThrow(() -> new RuntimeException("Feedback not found"));
    }

    @Override
    public Feedback updateFeedback(int id, Feedback feedbackDetails) {
        Feedback feedback = getFeedbackById(id);
        feedback.setFeedbackText(feedbackDetails.getFeedbackText());
        feedback.setRating(feedbackDetails.getRating());
        feedback.setDate(feedbackDetails.getDate());
        return feedbackRepository.save(feedback);
    }

    @Override
    public void deleteFeedback(int id) {
        feedbackRepository.deleteById((long) id);
    }

    @Override
    public List<Feedback> getFeedbacksByUserId(int userId) {
        return feedbackRepository.findByUserId((long) userId);
    }

    @Override
    public List<Feedback> getFeedbacksByTurfId(Long turfId) {
        return feedbackRepository.findByTurfId(turfId);
    }

    @Override
    public List<Feedback> getFeedbacksByUserIdAndTurfId(Long userId, Long turfId) {
        return feedbackRepository.findByUserIdAndTurfId(userId, turfId);
    }

    @Override
    public List<Feedback> getFeedbacksByRating(int rating) {
        return feedbackRepository.findByRatingGreaterThanEqual(rating);
    }

}