import { inject } from 'aurelia-framework';
import { Poi, Category } from '../services/poi-types';
import { PoiService } from '../services/poi-service';

/* Pois modal for viewing & creating pois*/
@inject(PoiService)
export class ListPois {

  pois: Poi[];
  categories: Category[];
  total = 0;
  filter: Poi[];

  constructor(private ps: PoiService) {
    this.pois = ps.pois;
    this.categories = ps.categories;
    this.total = ps.total;
    this.ps.singlePoi = null;
    this.ps.filterByAllCategories();
    this.filter = ps.filter;
  }
}
