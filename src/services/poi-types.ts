export interface Poi {
  name: string;
  category: string;
  description: string;
  image: any;
  longitude: number;
  latitude: number;
}

export interface Rating {
  rating: number;
  poi: Poi;
}

