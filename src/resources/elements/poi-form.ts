import { bindable } from 'aurelia-framework';
import { Poi, Category } from "../../services/poi-types";

export class PoiForm {
  name: string;
  description: string;
  image: any;
  longitude: number;
  latitude: number;

  @bindable
  pois: Poi[] = [];

  @bindable
  categories: Category[] = [];
  selectedCategory: Category = null;

  addPoi() {
    const poi = {
      name: this.name,
      category: this.selectedCategory,
      description: this.description,
      image: this.image,
      longitude: this.longitude,
      latitude: this.latitude,
    };
    this.pois.push(poi);
    console.log(poi);
  }

  constructor() {
    this.categories.push({name:'Waterford'});
    this.categories.push({name:'galway'});
  }
}
