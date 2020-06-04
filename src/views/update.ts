import { inject } from 'aurelia-framework';
import { Poi, Category } from '../services/poi-types';
import { PoiService} from '../services/poi-service';
import { Router } from 'aurelia-router';

/* Point of Service modal class*/
@inject(PoiService)
export class Pois {

  pois: Poi[];
  categories: Category[];
  currentPoi: Poi;

  constructor(private ps: PoiService, private router: Router) {
    this.pois = ps.pois;
    this.categories = ps.categories;
  }

  async activate(params) {
    const index = await this.ps.findPoiInPoisIndex(params.id);
    this.currentPoi = this.ps.pois[index];

  }

}
