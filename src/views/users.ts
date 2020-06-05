import { inject } from 'aurelia-framework';
import { User } from '../services/poi-types';
import { AdminService } from '../services/admin-service';

/* Point of Service modal class*/
@inject(AdminService)
export class Users {

  users: User[];

  constructor(private admin: AdminService) { }
  async activate(params) {
    await  this.admin.getUsers();
    this.users = this.admin.users;
  }
}
