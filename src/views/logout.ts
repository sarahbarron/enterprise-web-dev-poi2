import { inject } from 'aurelia-framework';
import {PoiService} from '../services/poi-service';

/* logout modal class*/
@inject(PoiService)
export class Logout {
  constructor(private ps: PoiService) {}

  attached() {
    this.ps.logout();
  }
}
