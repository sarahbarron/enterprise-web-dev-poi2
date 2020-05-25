import {inject, Aurelia} from 'aurelia-framework';
import { Router } from 'aurelia-router';
import {PLATFORM } from 'aurelia-pal';
import { Poi, Rating, Category, User, Image, RawPoi, RawImage, RawRating} from './poi-types';
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
  usersById: Map<string, User> = new Map();

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
    users.forEach(user => {
      this.users.set(user.email, user);
      this.usersById.set(user._id, user);
    });
    console.log(users);
  }

  async getCategories(){
    const response = await this.httpClient.get('/api/categories');
    this.categories = await response.content;
    console.log(this.categories);
  }

  // constructor of a new category
  async category(name:string){
    const category = {
      _id: '',
      name: name
    }
    const response = await this.httpClient.post('/api/categories/', category);
    const newCategory = await response.content;
    this.categories.push(newCategory);
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

  async getPois(){
    const response = await this.httpClient.get('/api/pois');
    const rawPois: RawPoi[] = await response.content;
    rawPois.forEach(rawPoi => {
      const poi = {
        _id: "",
        name: rawPoi.name,
        category: this.categories.find(category => rawPoi.category == category._id),
        description: rawPoi.description,
        longitude: rawPoi.longitude,
        latitude: rawPoi.latitude,
        user: this.usersById.get(rawPoi.user)
      }
      this.pois.push(poi);
      console.log(this.pois);
    })
  }

  // Constructor of a new poi
  async poi(name: string, category: Category, description: string, longitude: number, latitude: number, user: User){
    const poi = {
      _id: '',
      name: name,
      category: category,
      description: description,
      longitude: longitude,
      latitude: latitude,
      user: user
    }
    const response = await this.httpClient.post('/api/pois/', poi);
    const newPoi = await response.content;
    this.pois.push(newPoi);
    this.total = this.total + 1;
    this.ea.publish(new NumOfPoiUpdate(this.total));
    console.log(this.poi);
    console.log(this.total);
  }

  async getImages(){
    const response = await this.httpClient.get('/api/images');
    this.images = await response.content;
    console.log(this.images);
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
