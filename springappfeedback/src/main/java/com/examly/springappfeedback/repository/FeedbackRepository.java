package com.examly.springappfeedback.repository;

import com.examly.springappfeedback.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    List<Feedback> findByUserId(Long userId);

    List<Feedback> findByTurfId(Long turfId);

    List<Feedback> findByUserIdAndTurfId(Long userId, Long turfId);

    List<Feedback> findByRatingGreaterThanEqual(int rating);
}