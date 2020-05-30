import {inject} from 'aurelia-framework';
import { Rating, Poi } from '../services/poi-types';
import {PoiService} from '../services/poi-service';

/* Review and Ratings modal class*/
@inject(PoiService)
export class Ratings{
    ratings: Rating[];
    pois: Poi[];

    constructor(private rts: PoiService) {
      this.pois = rts.pois;
      this.ratings = rts.ratings;
    }
}
