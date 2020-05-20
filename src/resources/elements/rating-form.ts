import { bindable } from 'aurelia-framework';
import { Rating, Poi } from '../../services/poi-types';

/*
* Form for submitting a rating for a Point of interest
* */
export class RatingForm{

  // Stores a list of rating values
  @bindable
  ratings: Rating[] = []

  // Sores a list of POIs
  @bindable
  pois: Poi[] = [];

  // The rating given
  selectedRating=null;
  // The POI selected
  selectedPoi: Poi = null;

// when a rating is given add it to the list of ratings
  makeRating(){
    const rating = {
      rating: this.selectedRating,
      poi: this.selectedPoi
    };
    this.ratings.push(rating);
    console.log(this.ratings);
  };
}
