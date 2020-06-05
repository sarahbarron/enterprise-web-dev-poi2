import { bindable } from 'aurelia-framework';
import {User} from '../../services/poi-types';
/*
* List of all users
* */
export class UsersList{
  @bindable
  users: User[];

}


