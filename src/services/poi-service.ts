import {inject, Aurelia} from 'aurelia-framework';
import { Router } from 'aurelia-router';
import {PLATFORM } from 'aurelia-pal';
import { Poi, Rating, Category, User, Image} from './poi-types';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator'
import { NumOfPoiUpdate } from './messages';

@inject(HttpClient, EventAggregator, Aurelia, Router)
export class PoiService{

  pois: Poi[] =[];
  ratings: Rating[] = [];
  categories: Category[] = [];
  images: Image[] = [];
  total = 0;
  users: Map<string, User> = new Map();


  constructor(private httpClient: HttpClient, private ea: EventAggregator, private au: Aurelia, private router: Router)
  {
    httpClient.configure(http => {
      http.withBaseUrl('http://localhost:3000');
    });
    this.getUsers();
    this.getCategories();
    this.getPois();
  }

  async getUsers()
  {
    const response = await this.httpClient.get('/api/users');
    const users = await response.content;
    console.log(users);
    users.forEach(user => {
      this.users.set(user.email, user);

    });
  }

  async getCategories(){
    const response = await this.httpClient.get('/api/categories');
    this.categories = await response.content;
    console.log(this.categories);
  }

  async getPois(){
    const response = await this.httpClient.get('/api/pois');
    this.pois = await response.content;
    console.log(this.pois);
  }

  async getImages(){
    const response = await this.httpClient.get('/api/images');
    this.images = await response.content;
    console.log(this.images);
  }


  // Constructor of a new poi
  async poi(name: string, category: Category, description: string, longitude: number, latitude: number){
    const poi = {
      _id: '',
      name: name,
      category: category,
      description: description,
      longitude: longitude,
      latitude: latitude
    }
    const response = await this.httpClient.post('/api/pois/', poi);
    const newPoi = await response.content
    this.pois.push(newPoi);
    this.total = this.total + 1;
    this.ea.publish(new NumOfPoiUpdate(this.total));
    console.log(this.poi);
    console.log(this.total);
  }

  // constructor of a new category
  async category(name:string){
    const category = {
      _id: '',
      name: name
    }
    this.categories.push(category);
    console.log(this.categories);
  }
  // constructor of a new rating
  async rating(rate: number, review: string, poi: Poi){
    const rating = {
      _id:'',
      rating: rate,
      review: review,
      poi: poi
    };
    this.ratings.push(rating);
    console.log(this.ratings);
  }

  // constructor of a new rating
  async image(public_id: string, url: string, poi: Poi){
    const image = {
      _id:'',
      public_id: public_id,
      url: url,
      poi: poi
    };
    this.images.push(image);
    console.log(this.image);
  }
  signup(firstName: string, lastName: string, email: string, password: string) {
    //this.changeRouter(PLATFORM.moduleName('app'))
    return false;
  }

  async login(email: string, password: string) {
    const user = this.users.get(email);
    if (user && (user.password === password)) {
      this.changeRouter(PLATFORM.moduleName('app'))
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.changeRouter(PLATFORM.moduleName('start'))
  }

  changeRouter(module:string) {
    this.router.navigate('/', { replace: true, trigger: false });
    this.router.reset();
    this.au.setRoot(PLATFORM.moduleName(module));
  }

}
