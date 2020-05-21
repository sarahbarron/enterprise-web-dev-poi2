import {inject} from 'aurelia-framework';
import { Poi, Rating, Category, User } from './poi-types';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator'
import { NumOfPoiUpdate } from './messages';

@inject(HttpClient, EventAggregator)
export class PoiService{

  pois: Poi[] =[];
  ratings: Rating[] = [];
  categories: Category[] = [];
  total = 0;
  users: Map<string, User> = new Map();


  constructor(private httpClient: HttpClient, private ea: EventAggregator) {
    httpClient.configure(http => {
      http.withBaseUrl('http://localhost:8080');
    });
    this.getUsers();
    this.getCategories();
  }

  async getUsers()
  {
    const response = await this.httpClient.get('/api/users.json');
    const users = await response.content;
    users.forEach(user => {
      this.users.set(user.email, user);
    });
  }

  async getCategories(){
    const response = await this.httpClient.get('/api/categories.json');
    this.categories = await response.content;
    console.log(this.categories);
  }
  // Constructor of a new poi
  async poi(name: string, category: Category, description: string, image: object, longitude: number, latitude: number){
    const poi = {
      name: name,
      category: category,
      description: description,
      image: image,
      longitude: longitude,
      latitude: latitude
    }
    this.pois.push(poi);
    this.total = this.total + 1;
    this.ea.publish(new NumOfPoiUpdate(this.total));
    console.log(this.poi);
    console.log(this.total);
  }

  // constructor of a new category
  async category(name:string){
    const category = {
      name: name
    }
    this.categories.push(category);
    console.log(this.categories);
  }
  // constructor of a new rating
  async rating(rate: number, poi: Poi){
    const rating = {
      rating: rate,
      poi: poi
    };
    this.ratings.push(rating);
    console.log(this.ratings);
  }

}
