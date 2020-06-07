import { inject } from 'aurelia-framework';
import { Poi, Category } from '../services/poi-types';
import { PoiService } from '../services/poi-service';
import { Router } from 'aurelia-router';

/* Update class*/
@inject(PoiService)
export class Update {

  pois: Poi[];
  categories: Category[];
  currentPoi: Poi;
  singlePoi;

  constructor(private ps: PoiService, private router: Router) {
    this.pois = ps.pois;
    this.categories = ps.categories;
  }
  // find the poi
  async activate(params) {
    const index = await this.ps.findPoiInPoisIndex(params.id);
    this.currentPoi = this.ps.pois[index];
    await this.ps.setSinglePoi(params.id);
    this.singlePoi = this.ps.singlePoi;

  }

}
