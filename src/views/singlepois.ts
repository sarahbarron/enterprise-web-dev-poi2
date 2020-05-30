import { inject, bindable } from 'aurelia-framework';
import { Poi} from '../services/poi-types';
import { PoiService} from '../services/poi-service';

/* Point of Service modal class*/
@inject(PoiService)
export class SinglePois {

  @bindable poiId;
  @bindable poi: Poi;

  constructor(private ps: PoiService) {}
  activate(params) {
    this.poiId = params.id;
    this.ps.setSinglePoi(this.poiId);
    this.poi = this.ps.singlePoi;

  }




}







