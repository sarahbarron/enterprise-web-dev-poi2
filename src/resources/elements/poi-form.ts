import { bindable } from 'aurelia-framework';
import { Poi } from "../../services/poi-types";

export class PoiForm {
  name: string;
  category: string;
  description: string;
  image: any;
  longitude: number;
  latitude: number;
  @bindable
  pois: Poi[] = [];

  addPoi() {
    const poi = {
      name: this.name,
      category: this.category,
      description: this.description,
      image: this.image,
      longitude: this.longitude,
      latitude: this.latitude,
    };
    this.pois.push(poi);
    console.log(poi);
  }
}
