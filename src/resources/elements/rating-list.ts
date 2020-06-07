import { bindable } from 'aurelia-framework';
import { Rating } from '../../services/poi-types';

/*
* List of all Reviews and Ratings
* */
export class RatingList {
  @bindable
  ratings: Rating[];
}
