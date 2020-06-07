import { inject, bindable } from 'aurelia-framework';
import { User } from '../services/poi-types';
import { AdminService } from '../services/admin-service';
import { PoiService } from '../services/poi-service';

/* User modal */
@inject(AdminService)
export class Users {

  @bindable users: User[];

  constructor(private admin: AdminService) {
  }

  // get all users
  async activate() {
    await this.admin.getUsers();
    this.users = this.admin.users;
  }
}
