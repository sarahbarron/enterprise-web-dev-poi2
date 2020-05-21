import {inject, bindable} from 'aurelia-framework';
import {PoiService} from '../../services/poi-service';

@inject(PoiService)
export class TotalPois{
  @bindable
  total = 0;

  constructor(private ps: PoiService) {}
}
