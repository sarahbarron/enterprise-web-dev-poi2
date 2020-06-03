import { bindable, inject } from 'aurelia-framework';
import { Poi } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';

/*
Images
* */
@inject(PoiService)
export class ImageCard {
  @bindable singlePoi;
  @bindable pois;

  constructor(private ps: PoiService)
  {
    this.singlePoi = this.ps.singlePoi;
    this.pois = this.ps.pois;
  }
}
