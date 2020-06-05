import { inject } from 'aurelia-framework';
import { Category, User } from '../services/poi-types';
import { AdminService } from '../services/admin-service';
import { PoiService } from '../services/poi-service';

/* Point of Service modal class*/
@inject(AdminService, PoiService)
export class Users {

  users: User[];
  categories: Category[];

  constructor(private admin: AdminService, private ps:PoiService) {
    this.categories = ps.categories;
  }

  async activate() {
    await  this.admin.getUsers();
    this.users = this.admin.users;
  }
}
