import {inject, Aurelia} from 'aurelia-framework';
import { Router } from 'aurelia-router';
import {PLATFORM } from 'aurelia-pal';
import { Poi, Rating, Category,Image} from './poi-types';
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

  constructor(private httpClient: HttpClient, private ea: EventAggregator, private au: Aurelia, private router: Router) {
    httpClient.configure((http) => {
      http.withBaseUrl('http://localhost:3000');
    });
  }

  async getCategories(){
    const response = await this.httpClient.get('/api/categories');
    this.categories = await response.content;
    console.log(this.categories);
  }

  // constructor of a new category
  async category(name:string){
    const category = {
      name: name
    }
    const response = await this.httpClient.post('/api/categories', category);
    const newCategory = await response.content;
    this.categories.push(newCategory);
    console.log(this.categories);
  }

  // async getPois(){
  //   const response = await this.httpClient.get('/api/pois');
  //   const rawPois: RawPoi[] = await response.content;
  //   rawPois.forEach(rawPoi => {
  //     const poi = {
  //       _id: "",
  //       name: rawPoi.name,
  //       category: this.categories.find(category => rawPoi.category == category._id),
  //       description: rawPoi.description,
  //       longitude: rawPoi.longitude,
  //       latitude: rawPoi.latitude,
  //       user: this.usersById.get(rawPoi.user)
  //     }
  //     this.pois.push(poi);
  //     console.log(this.pois);
  //   })
  // }

  // Constructor of a new poi
  async poi(name: string, category: Category, description: string, longitude: number, latitude: number){
    const poi = {
      name: name,
      category: category,
      description: description,
      longitude: longitude,
      latitude: latitude,
    }
    const response = await this.httpClient.post('/api/categories/' +category._id+ '/pois', poi);
    this.pois.push(poi);
    this.total = this.total + 1;
    this.ea.publish(new NumOfPoiUpdate(this.total));
    console.log(this.poi);
    console.log(this.total);
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

  checkIsAuthenticated() {
    let authenticated = false;
    if (localStorage.poi !== 'null') {
      authenticated = true;
      this.httpClient.configure(http => {
        const auth = JSON.parse(localStorage.poi);
        http.withHeader('Authorization', 'bearer ' + auth.token);
      });
      this.changeRouter(PLATFORM.moduleName('app'));
    }
  }

  async signup(firstName: string, lastName: string, email: string, password: string) {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    const response = await this.httpClient.post('/api/users', user);
    const newUser = await response.content;
    this.changeRouter(PLATFORM.moduleName('app'))
    return false;
  }

  async login(email: string, password: string) {
    let success = false;
    try {
      const response = await this.httpClient.post('/api/users/authenticate', { email: email, password: password });
      const status = await response.content;
      if (status.success) {
        this.httpClient.configure((configuration) => {
          configuration.withHeader('Authorization', 'bearer ' + status.token);
        });
        localStorage.poi = JSON.stringify(response.content)
        await this.getCategories();
        this.changeRouter(PLATFORM.moduleName('app'));
        success = status.success;
      }
    } catch (e) {
      success = false;
    }
    return success;
  }

  logout() {
    localStorage.poi = null;
    this.httpClient.configure(configuration => {
      configuration.withHeader('Authorization', '');
    });
    this.changeRouter(PLATFORM.moduleName('start'));
  }

  changeRouter(module:string) {
    this.router.navigate('/', { replace: true, trigger: false });
    this.router.reset();
    this.au.setRoot(PLATFORM.moduleName(module));
  }
}
