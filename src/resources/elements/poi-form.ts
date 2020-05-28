import { bindable, inject } from 'aurelia-framework';
import { Poi, Category, Location } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';

@inject(PoiService)
export class PoiForm {

  @bindable
  pois: Poi[];
  @bindable
  categories: Category[];

  name: string;
  description: string;
  selectedCategory: Category = null;

  location: Location = { lat: 53.2734, lng: -7.7783203 };

  constructor(private ps: PoiService) { }

  addPoi() {
    this.ps.poi(this.name, this.selectedCategory, this.description, this.location);
  }

}

