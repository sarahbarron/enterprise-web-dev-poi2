import { inject } from 'aurelia-framework';
import { Poi, Category } from '../services/poi-types';
import { RatingService} from '../services/rating-service';


@inject(RatingService)
export class Pois {

  pois: Poi[] = [];
  categories: Category[];

  constructor(private rts: RatingService ) {
    this.pois = rts.pois;
  }
}
