import { bindable } from 'aurelia-framework';
import { Location } from '../../services/poi-types';

/*
* Coordinates for the location of a poi on the map (longitude and latitude)
* Retrieved from the Poi form input
* */
export class Coordinates {
  @bindable location: Location;
}
