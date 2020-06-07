import { bindable, inject } from 'aurelia-framework';
import { PoiService } from '../../services/poi-service';

/*
Images Card view
* */
@inject(PoiService)
export class ImageCard {
  @bindable singlePoi;
  @bindable pois;

  constructor(private ps: PoiService) {
    this.singlePoi = this.ps.singlePoi;
    this.pois = this.ps.pois;
  }

  // delete image
  async deleteImage(img_id, poi_id) {
    await this.ps.deleteImage(img_id, poi_id);
  }
}
