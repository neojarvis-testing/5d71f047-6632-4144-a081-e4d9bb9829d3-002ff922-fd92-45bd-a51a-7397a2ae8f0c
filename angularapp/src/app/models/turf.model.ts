export interface Turf {
    turfId?: number;
    name: string;
    location: string;
    pricePerHour: number;
    description: string;
    isActive?: boolean; // Defaults to true
    photo?: string; // base64 string or image URL
    userId: number;
  }
  