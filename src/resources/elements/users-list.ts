import { bindable, inject } from 'aurelia-framework';
import { User } from '../../services/poi-types';
import { AdminService } from '../../services/admin-service';

/*
* List of all users
* */
@inject(AdminService)
export class UsersList {
  @bindable
  users: User[];

  constructor(private admin: AdminService) {
  }

  // delete a user
  async deleteUser(id) {
    await this.admin.deleteUser(id);
  }
}


