import { bindable, inject } from 'aurelia-framework';
import { Rating, Poi } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';

/*
* Form for submitting a rating for a Point of interest
* */
@inject(PoiService)
export class RatingForm{

  @bindable
  ratings: Rating[];
  @bindable
  pois: Poi[];
  selectedRating=null;
  selectedPoi: Poi = null;

 constructor(private rts:PoiService) {}
   makeRating()
   {
     this.rts.rating(this.selectedRating, this.selectedPoi);
   }
}
