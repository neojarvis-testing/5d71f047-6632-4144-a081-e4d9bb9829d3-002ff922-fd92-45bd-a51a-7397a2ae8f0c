package com.examly.springappfeedback.repository;

import com.examly.springappfeedback.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    List<Feedback> findByUserUserId(Long userId);

    List<Feedback> findByTurfTurfId(int turfId);

    List<Feedback> findByUserUserIdAndTurfTurfId(Long userId, int turfId);

    List<Feedback> findByRatingGreaterThanEqual(int rating);
}