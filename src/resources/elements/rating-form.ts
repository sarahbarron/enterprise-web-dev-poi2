import { bindable, inject } from 'aurelia-framework';
import { Rating, Poi } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';

/*
* Form for submitting a review & rating for a Point of interest
* */
@inject(PoiService)
export class RatingForm {

  @bindable
  ratings: Rating[];
  @bindable
  pois: Poi[];
  selectedRating = null;
  selectedPoi: Poi = null;
  review: string;

  constructor(private rts: PoiService) {
  }

  makeRating() {
    this.rts.rating(this.selectedRating, this.review, this.selectedPoi);
  }
}
