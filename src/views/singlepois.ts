import { inject, bindable } from 'aurelia-framework';
import { PoiService } from '../services/poi-service';


/* Point of Service modal class*/
@inject(PoiService)
export class SinglePois {

  @bindable singlePoi;

  constructor(private ps: PoiService) {
  }

  // set the single poi using the id from the parameters of the url
  async activate(params) {
    await this.ps.setSinglePoi(params.id);
    this.singlePoi = this.ps.singlePoi;
  }

}







