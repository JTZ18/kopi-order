export type Card = {
  id: number;
  country: string;
  city: string;
  place: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  summary: string;
  price: number;
  activities: any; // The specific type depends on the structure of activities in the locations
  miscellaneous: string;
  tips_n_tricks: string;
  peak_hours: string;
  best_times_to_visit: string;
  notes: string;
  video_url: string;
  image_url: string;
};