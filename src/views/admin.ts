import { inject, bindable } from 'aurelia-framework';
import { Category, User, Pois } from '../services/poi-types';
import { AdminService } from '../services/admin-service';
import { PoiService } from '../services/poi-service';

/* Point of Service modal class*/
@inject(AdminService, PoiService)
export class Users {

  @bindable users: User[];
  @bindable categories: Category[];
  @bindable pois: Pois[];

  constructor(private admin: AdminService, private ps:PoiService) {
    this.categories = ps.categories;
  }

  async activate() {
    await this.admin.getPois();
    this.pois = this.admin.pois;
    await this.admin.getUsers();
    this.users = this.admin.users;

  }
}
