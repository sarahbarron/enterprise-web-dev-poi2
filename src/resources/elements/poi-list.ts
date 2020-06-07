import { bindable, inject } from 'aurelia-framework';
import { Poi } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';

/*
List of Pois
* */
@inject(PoiService)
export class PoiList {

  @bindable filter: Poi[];

  constructor(private ps: PoiService) {
  }
  // Delete a poi
  async deletePoi(id) {
    await this.ps.deletePoi(id);
  }
}
