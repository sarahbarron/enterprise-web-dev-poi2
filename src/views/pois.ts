import { inject } from 'aurelia-framework';
import { Poi, Category } from '../services/poi-types';
import { PoiService} from '../services/poi-service';



@inject(PoiService)
export class Pois {

  pois: Poi[];
  categories: Category[];

  constructor(private ps: PoiService) {
    this.pois = ps.pois;
    this.categories = ps.categories;
  }

}
