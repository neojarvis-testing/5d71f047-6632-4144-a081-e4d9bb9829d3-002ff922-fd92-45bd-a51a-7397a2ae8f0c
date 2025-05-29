import { Booking } from './booking.model';

describe('Booking Model', () => {

  fit('Frontend_Booking_model_should_create_an_instance', () => {
    const booking: Booking = {
      bookingId: 1001,
      bookingForDate: '2025-06-15',
      startTime: '09:00',
      endTime: '10:30',
      bookingCreatedAt: '2025-05-01T10:00:00Z',
      status: 'BOOKED',
      userId: 200,
      turfId: 300
    };

    expect(booking).toBeTruthy();
    
    expect(booking.status).toBe('BOOKED');
    
  });

});
