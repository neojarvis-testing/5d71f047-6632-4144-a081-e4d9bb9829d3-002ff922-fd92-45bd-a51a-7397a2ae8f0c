package com.examly.springappuser.client;

import com.examly.springappuser.client.model.Feedback;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(name = "feedback-service", url = "http://localhost:8080")
public interface FeedbackService {
    @GetMapping("/feedbacks")
    List<Feedback> getAllFeedbacks();
}
