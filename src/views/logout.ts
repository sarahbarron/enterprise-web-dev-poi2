import { inject } from 'aurelia-framework';
import { PoiService } from '../services/poi-service';

/* logout modal class*/
@inject(PoiService)
export class Logout {
  constructor(private ps: PoiService) {
  }
  // logout
  attached() {
    this.ps.logout();
  }
}
