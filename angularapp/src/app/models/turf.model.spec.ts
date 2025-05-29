import { Turf } from './turf.model';

describe('Turf Model', () => {

  fit('Frontend_Turf_model_should_create_an_instance', () => {
    const turf: Turf = {
      turfId: 1,
      name: 'GreenField Arena',
      location: 'Chennai',
      pricePerHour: 1200,
      description: 'Spacious turf with floodlights and parking.',
      isActive: true,
      photo: 'https://8080-ccbbfcdfdcceaecfcdafecfffdbdaaaaefc.project.examly.io/turf-image.jpg',
      userId: 101
    };

    expect(turf).toBeTruthy();
    expect(turf.name).toBe('GreenField Arena');
    expect(turf.location).toBe('Chennai');
  });

});
