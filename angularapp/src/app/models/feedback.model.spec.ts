import { Feedback } from './feedback.model';

describe('Feedback Model', () => {

  fit('Frontend_Feedback_model_should_create_an_instance', () => {
    // Create a sample Feedback object
    const feedback: Feedback = {
      feedbackId: 1,
      userId: 456,
      feedbackText: 'Great turf and facilities!',
      date: new Date('2024-07-10'),
      turfId: 123,
      rating: 5
    };

    expect(feedback).toBeTruthy();
    expect(feedback.feedbackText).toBe('Great turf and facilities!');
    
  });

});
