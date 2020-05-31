import { LeafletMap } from './leaflet-map';
import { inject, Aurelia } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { Poi, Rating, Category, Image, Location } from './poi-types';
import { HttpClient } from 'aurelia-http-client';
import { EventAggregator } from 'aurelia-event-aggregator'
import { messageUpdate } from './messages';

/*
* Service Class for the Point of Interest project
* */
@inject(HttpClient, EventAggregator, Aurelia, Router)
export class PoiService {
  pois: Poi[] = [];
  ratings: Rating[] = [];
  categories: Category[] = [];
  images: Image[] = [];
  locations: Location[] = [];
  total = 0;
  singlePoi = null;

  // Constructor method
  constructor(private httpClient: HttpClient, private ea: EventAggregator, private au: Aurelia, private router: Router) {
    httpClient.configure((http) => {
      http.withBaseUrl('http://localhost:3000');
    });
  }

  async deletePoi(id) {
    console.log(id);
    const response = await this.httpClient.delete('/api/pois/' + id);
  }
  async setSinglePoi(id) {
    const response = await this.httpClient.get('/api/pois/' + id);
    this.singlePoi = response.content;
  }

  async resetSinglePoi() {
    this.singlePoi = null;
  }
  // Get all categories
  async getCategories() {
    const response = await this.httpClient.get('/api/categories');
    this.categories = await response.content;
    console.log(this.categories);
  }


  // constructor of a new category
  async category(name: string) {
    const category = {
      name: name
    }
    const response = await this.httpClient.post('/api/categories', category);
    const newCategory = await response.content;
    this.categories.push(newCategory);
    console.log(this.categories);
  }

  // constructor of a new Location
  async location(lat: number, lng: number) {
    const location = {
      lat: lat,
      lng: lng
    }
    const response = await this.httpClient.post('/api/locations', location);
    const newLocation = await response.content;
    this.locations.push(newLocation);
    console.log(this.locations);
    return (newLocation)
  }

  // Constructor of a new poi
  async poi(name: string, category: Category, description: string, location: Location) {

    const newLocation = await this.location(location.lat, location.lng);

    const poi = {
      name: name,
      category: category,
      description: description,
      location: location
    }
    const response = await this.httpClient.post('/api/categories/' + category._id + '/locations/' + newLocation._id + '/pois', poi);
    this.pois.push(poi);
    this.total = this.total + 1;
    this.ea.publish(new messageUpdate(this.total, poi));
    console.log(this.pois);
    console.log(this.total);
  }

  // Get pois by user id
  async getPoisByUser() {
    const response = await this.httpClient.get('/api/pois/user');
    this.pois = await response.content;
    console.log(this.pois);
  }

  // constructor of a new rating
  async rating(rate: number, review: string, poi: Poi) {
    const rating = {
      _id: '',
      rating: rate,
      review: review,
      poi: poi
    };
    this.ratings.push(rating);
    console.log(this.ratings);
  }

  // Get images
  async getImages() {
    const response = await this.httpClient.get('/api/images');
    this.images = await response.content;
    console.log(this.images);
  }

  // constructor of a new rating
  async image(public_id: string, url: string, poi: Poi) {
    const image = {
      _id: '',
      public_id: public_id,
      url: url,
      poi: poi
    };
    this.images.push(image);
    console.log(this.image);
  }

  // Check if user is already authenticated prior to asking the user to login or signup
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

  // Method for signing up
  async signup(firstName: string, lastName: string, email: string, password: string) {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    const response = await this.httpClient.post('/api/users', user);
    const newUser = await response.content;
    await this.getCategories();
    this.changeRouter(PLATFORM.moduleName('app'))
    return false;
  }

  // Method for login
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
        await this.getPoisByUser();
        this.changeRouter(PLATFORM.moduleName('app'));
        success = status.success;
      }
    } catch (e) {
      success = false;
    }
    return success;
  }

  // Method for logout
  logout() {
    localStorage.poi = null;
    this.httpClient.configure(configuration => {
      configuration.withHeader('Authorization', '');
    });
    this.changeRouter(PLATFORM.moduleName('start'));
  }

  // Change the router depending on the user type
  changeRouter(module: string) {
    this.router.navigate('/', { replace: true, trigger: false });
    this.router.reset();
    this.au.setRoot(PLATFORM.moduleName(module));
  }
}
