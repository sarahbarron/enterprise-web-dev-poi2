export interface Poi {
  _id: string;
  name: string;
  description: string;
  longitude: number;
  latitude: number;
  user: User;
  category: Category;
}

export interface RawPoi {
  name: string;
  description: string;
  longitude: number;
  latitude: number;
  user: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface User {
  _id:string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  numOfPoi: number;
  scope: any;
}

export interface Rating {
  _id: string;
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
  _id: string;
  public_id: string;
  url: string;
  poi: Poi;
}
export interface RawImage {
  public_id: string;
  url: string;
  poi: string;
}

