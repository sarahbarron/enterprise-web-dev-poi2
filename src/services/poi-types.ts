export interface Poi {
  name: string;
  category: Category;
  description: string;
  image: any;
  longitude: number;
  latitude: number;
}

export interface Rating {
  rating: number;
  poi: Poi;
}

export interface Category {
  name: string;
}
