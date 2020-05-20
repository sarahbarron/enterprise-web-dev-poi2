import { inject } from 'aurelia-framework';
import { Poi } from '../services/poi-types';
import { RatingService} from '../services/rating-service';

@inject(RatingService)
export class Pois {
  pois: Poi[] = [];

  constructor(private rs: RatingService ) {
    this.pois = rs.pois;
  }
}
