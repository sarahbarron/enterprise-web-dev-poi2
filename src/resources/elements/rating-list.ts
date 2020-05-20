import {bindable} from 'aurelia-framework';
import { Rating } from '../../services/poi-types';

export class RatingList{
  @bindable
  ratings : Rating[];
}
