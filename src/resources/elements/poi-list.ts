import { bindable } from 'aurelia-framework';
import { Poi } from '../../services/poi-types';

/*
List of Pois
* */
export class PoiList {
  @bindable
  pois: Poi[];
}
