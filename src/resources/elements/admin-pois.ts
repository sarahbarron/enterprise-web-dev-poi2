import { bindable, inject } from 'aurelia-framework';
import { Pois } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';
import { AdminService } from '../../services/admin-service';

// list of Pois
@inject(PoiService, AdminService)
export class AdminPois {

  @bindable pois: Pois[];

  constructor(private ps:PoiService, private admin:AdminService) { this.pois = this.admin.pois}

  async deletePoi(id) {
    await this.ps.deletePoi(id);
  }
}
