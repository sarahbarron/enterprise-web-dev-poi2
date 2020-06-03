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

  async uploadImage(formData) {
  try{
      const cloudinaryHttp = new HttpClient();
      cloudinaryHttp.configure(http => {
        http.withBaseUrl('https://api.cloudinary.com/v1_1/sarahbarron');
      });

      const response = await cloudinaryHttp.post('/image/upload',formData);
      console.log(response.content);
      this.httpClient.configure(http => {http.withBaseUrl('http://localhost:3000');});
      const url = response.content.url;
      const public_id = response.content.public_id;
      const img = this.image(public_id, url);
      console.log(img);
      return img;

    }catch (e) {
      console.log(e);
    }
  }

  // constructor of a new image
  async image(public_id: string, url: string) {
    const image = {
      public_id: public_id,
      url: url,
    };
    const response = await this.httpClient.post('/api/images', image);
    const newImage = response.content
    this.images.push(newImage);
    console.log(newImage);
    return newImage;
  }

  async addImageToPoi(poi_id, img_id){
    const addImage = {
      img_id: img_id,
      poi_id: poi_id
    }
    const response = await this.httpClient.post('/api/pois/addimage',addImage);
    this.singlePoi = response;
    await this.getPoisByUser();
    console.log(this.singlePoi);
  }

  async deletePoi(id) {
    console.log(id);
    const response = await this.httpClient.delete('/api/pois/' + id);
    const index = await this.findPoiInPoisIndex(id);
    await this.deletePoiInPoisArray(index);
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
  async poi(name: string, category: Category, description: string, location: Location, image: Image) {

    const newLocation = await this.location(location.lat, location.lng);

    const poi = {
      name: name,
      category: category,
      description: description,
      location: location,
      image: image
    }

    const response = await this.httpClient.post('/api/categories/' + category._id + '/locations/' + newLocation._id + '/images/'+image._id+'/pois', poi);
    const newPoi = {
      _id: response.content._id,
      name:name,
      category: category,
      description: description,
      location: location,
      image: image
    }
    this.pois.push(newPoi);
    this.total = this.total + 1;
    this.ea.publish(new messageUpdate(this.total, newPoi));
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

  findPoiInPoisIndex(poi_id){
    for(let i = 0; i<this.pois.length; i++){
      console.log(this.pois[i]._id);
      if(this.pois[i]._id === poi_id)
      {
        return i;
      }
    }
  }

  deletePoiInPoisArray(index){
    this.pois = this.pois.splice(index,1);
  }
}

