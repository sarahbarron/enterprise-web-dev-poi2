import { bindable, inject } from 'aurelia-framework';
import { Poi, Category } from "../../services/poi-types";
import { PoiService } from '../../services/poi-service';

@inject(PoiService)
export class PoiForm {

  name: string;
  description: string;
  longitude: number;
  latitude: number;


  @bindable
  pois: Poi[];
  @bindable
  categories: Category[];
  selectedCategory: Category = null;

  constructor(private ps:PoiService) {}

  addPoi() {
    this.ps.poi(this.name, this.selectedCategory, this.description, this.longitude, this.latitude);
  }

}

