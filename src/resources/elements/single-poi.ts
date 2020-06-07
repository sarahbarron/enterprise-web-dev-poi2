import { bindable, inject } from 'aurelia-framework';
import { PoiService } from '../../services/poi-service';

/*
* Class for showing a single poi
* */
@inject(PoiService)
export class SinglePoi {

  @bindable singlePoi;

  constructor(private ps: PoiService) {
    this.singlePoi = this.ps.singlePoi;
  }

}
