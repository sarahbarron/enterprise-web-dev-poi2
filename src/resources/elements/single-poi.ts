import { bindable, inject } from 'aurelia-framework';
import { PoiService } from '../../services/poi-service';

/*
* Class for the poi form input to add a poi to a users account
* */
@inject(PoiService)
export class SinglePoi {

  @bindable singlePoi;

  constructor(private ps: PoiService) { this.singlePoi = this.ps.singlePoi}

}
