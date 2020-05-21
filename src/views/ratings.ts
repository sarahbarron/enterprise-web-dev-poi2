import {inject} from 'aurelia-framework';
import { Rating, Poi } from '../services/poi-types';
import {RatingService} from '../services/rating-service';

@inject(RatingService)
export class Ratings{
    ratings: Rating[];
    pois: Poi[];

    constructor(private rts: RatingService) {
      this.pois = rts.pois;
      this.ratings = rts.ratings;
    }
}
