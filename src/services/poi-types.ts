// Point of Interest Type
export interface Poi {
  _id: string;
  name: string;
  description: string;
  location: Location;
  category: Category;
  image: Image[];
}

// Category Type
export interface Category {
  _id: string;
  name: string;
}

// Location of the Poi type
export interface Location {
  _id: string;
  lat: number;
  lng: number;
}

// User type
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  numOfPoi: number;
  scope: any;
}

// Rating and Review Type
export interface Rating {
  _id: string;
  rating: number;
  review: string;
  poi: Poi;
}

// Image Type
export interface Image {
  _id: string;
  public_id: string;
  url: string;
}
