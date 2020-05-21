import { Poi, Rating } from './poi-types';

export class RatingService{
  pois: Poi[] =[];
  ratings: Rating[] = [];

  async rating(rate: number, poi: Poi){
    const rating = {
      rating: rate,
      poi: poi
    };
    this.ratings.push(rating);
    console.log(this.ratings);
  };
}
