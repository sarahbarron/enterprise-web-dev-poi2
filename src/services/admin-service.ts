
import { inject, Aurelia } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { User, Poi, Rating, Category, Image, Location } from './poi-types';
import { HttpClient } from 'aurelia-http-client';
import { EventAggregator } from 'aurelia-event-aggregator'
import { PoiService} from './poi-service';

/*
* Service Class for the Point of Interest project
* */
@inject(HttpClient, EventAggregator, Aurelia, Router, PoiService)
export class AdminService {
  users: User[] = [];
  allpois: Poi[] = [];

  // Constructor method
  constructor(private httpClient: HttpClient, private ea: EventAggregator, private au: Aurelia, private router: Router) {
    httpClient.configure((http) => {
      http.withBaseUrl('http://localhost:3000');
    });
  }

  // Get all categories
  async getUsers() {
    const response = await this.httpClient.get('/api/users');
    this.users = await response.content;
    console.log(this.users);
  }

  async deleteUser(id) {
    console.log(id);
    const response = await this.httpClient.delete('/api/users/' + id);
    const index = await this.findUserIndexInUsers(id);
    await this.deleteUserInUsersArray(index);
  }

  findUserIndexInUsers(user_id){
    for(let i = 0; i<this.users.length; i++){
      console.log(this.users[i]._id);
      if(this.users[i]._id === user_id)
      {
        return i;
      }
    }
  }

  deleteUserInUsersArray(index){
    this.users = this.users.splice(index,1);
  }

}
