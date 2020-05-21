import { bindable, inject } from 'aurelia-framework';
import { Rating, Poi } from '../../services/poi-types';
import { RatingService } from '../../services/rating-service';

/*
* Form for submitting a rating for a Point of interest
* */
@inject(RatingService)
export class RatingForm{

  // Stores a list of rating values
  @bindable
  ratings: Rating[];
  // Sores a list of POIs
  @bindable
  pois: Poi[];

  // The rating given
  selectedRating=null;

  // The POI selected
  selectedPoi: Poi = null;

 constructor(private rts:RatingService) {}
   makeRating()
   {
     this.rts.rating(this.selectedRating, this.selectedPoi);
   }


}
