import { bindable, inject } from 'aurelia-framework';
import { Poi } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';

/*
List of Pois
* */
@inject(PoiService)
export class PoiList {
  @bindable
  pois: Poi[];

  constructor(private ps: PoiService) { }
  async deletePoi(id) {
    await this.ps.deletePoi(id);
    // await this.ps.getPoisByUser();
  }
}
