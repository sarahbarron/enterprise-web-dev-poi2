import { bindable } from 'aurelia-framework';
import { Rating } from '../../services/poi-types';


export class RatingForm{

  @bindable
  ratings: Rating[] = []
  selectedRating=null;

  makeRating(){
    const rating = {
      rating: this.selectedRating,
    };
    this.ratings.push(rating);
    console.log(this.ratings);
  };
}
