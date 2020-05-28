export interface Poi {
  name: string;
  description: string;
  location: Location;
  category: Category;
}


export interface Category {
  _id: string;
  name: string;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  numOfPoi: number;
  scope: any;
}

export interface Rating {
  // _id: string;
  rating: number;
  review: string;
  poi: Poi;
}
export interface RawRating {
  rating: number;
  review: string;
  poi: string;
}

export interface Image {
  // _id: string;
  public_id: string;
  url: string;
  poi: Poi;
}
export interface RawImage {
  public_id: string;
  url: string;
  poi: string;
}

