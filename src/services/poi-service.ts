import { inject, Aurelia } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { Poi, Rating, Category, Image, Location } from './poi-types';
import { HttpClient } from 'aurelia-http-client';
import { EventAggregator } from 'aurelia-event-aggregator';
import { messageUpdate } from './messages';


/*
* Service Class for the Point of Interest project
* */
@inject(HttpClient, EventAggregator, Aurelia, Router)
export class PoiService {
  pois: Poi[] = [];
  ratings: Rating[] = [];
  categories: Category[] = [];
  total = 0;
  singlePoi = null;
  filter: Poi[] = [];
  scope: string;

  // Constructor method
  constructor(private httpClient: HttpClient, private ea: EventAggregator, private au: Aurelia, private router: Router) {
    httpClient.configure((http) => {
      http.withBaseUrl('http://localhost:3000');
    });

  }


  // IMAGES **********************************************************************************************************

  // Upload an image to cloudinary
  async uploadImage(formData) {
    try {
      const cloudinaryHttp = new HttpClient();
      cloudinaryHttp.configure(http => {
        http.withBaseUrl('https://api.cloudinary.com/v1_1/sarahbarron');
      });

      const response = await cloudinaryHttp.post('/image/upload', formData);
      console.log(response.content);
      this.httpClient.configure(http => {
        http.withBaseUrl('http://localhost:3000');
      });
      const url = response.content.url;
      const public_id = response.content.public_id;
      const img = this.image(public_id, url);
      return img;

    } catch (e) {
      console.log(e);
    }
  }

  // Add an Image to the MongoDB
  async image(public_id: string, url: string) {
    const image = {
      public_id: public_id,
      url: url
    };
    const response = await this.httpClient.post('/api/images', image);
    const newImage = response.content;
    return newImage;
  }

  // Add the image to the poi on the client side
  async addImageToPoi(poi_id, img) {
    const addImage = {
      img_id: img._id,
      poi_id: poi_id
    };
    const response = await this.httpClient.post('/api/pois/addimage', addImage);
    const index = await this.findPoiInPoisIndex(poi_id);
    this.pois[index].image.push(img);
    return response;
  }

// delete images from the database
  async deleteImage(img_id, poi_id) {
    const response = await this.httpClient.delete('/api/poi/' + poi_id + '/images/' + img_id);
    console.log('Deleted Image Id:' + img_id);
    const poi_index = await this.findPoiInPoisIndex(poi_id);
    const image_index = await this.findImageInPoisIndex(poi_index, img_id);
    await this.deleteLocalImage(poi_index, image_index);
  }

  // Find the image index within the POI
  async findImageInPoisIndex(index, img_id) {
    for (let i = 0; i < this.pois[index].image.length; i++) {
      if (this.pois[index].image[i]._id === img_id) {
        return i;
      }
    }
  }

  // Delete image from the poi in the local pois array
  async deleteLocalImage(poi_index, img_index) {
    this.pois[poi_index].image.splice(img_index, 1);
  }


  // POI **************************************************************************************************************

  // Constructor of a new poi add to the MongoDB and to the pois array on the client side
  async poi(name: string, category: Category, description: string, location: Location, image: Image) {

    // create a location in mongoDb
    const newLocation = await this.location(location.lat, location.lng);
    //poi to be sent to server
    const poi = {
      name: name,
      category: category,
      description: description,
      location: newLocation,
      image: image
    };
    // create a poi in mongoDb
    const response = await this.httpClient.post('/api/categories/' + category._id + '/pois', poi);

    // create an image array and put the image created from the form into it
    let images: Image[] = [image];
    // poi to be stored locally
    const newPoi = {
      _id: response.content._id,
      name: name,
      category: category,
      description: description,
      location: location,
      image: images
    };
    // store the poi locally
    await this.pois.push(newPoi);
    // filter the pois by all categories
    await this.filterByAllCategories();
    // add one to the total number of pois created
    this.total = this.total + 1;
    // publish an event to update the total and the map
    this.ea.publish(new messageUpdate(this.total, newPoi));
  }

  // Get all pois
  async getAllPois() {
    const response = await this.httpClient.get('/api/pois');
    this.pois = await response.content;
    console.log(this.pois);
  }


  // Get pois by user id
  async getPoisByUser() {
    const response = await this.httpClient.get('/api/pois/user');
    this.pois = await response.content;
    console.log(this.pois);
  }

  // Delete a Poi
  async deletePoi(id) {
    console.log(id);
    const response = await this.httpClient.delete('/api/pois/' + id);
    console.log('delete poi response :' + response);
    const index = await this.findPoiInPoisIndex(id);
    await this.deletePoiInPoisArray(index);
    await this.filterByAllCategories();
  }

  // find a poi in the pois array and set it the singlePoi variable for single lookup
  async setSinglePoi(id) {
    const index = await this.findPoiInPoisIndex(id);
    this.singlePoi = this.pois[index];
    console.log('single POI: ' + this.singlePoi);
  }

  // Find a poi's index in the pois array
  async findPoiInPoisIndex(poi_id) {
    for (let i = 0; i < this.pois.length; i++) {
      console.log(this.pois[i]._id);
      if (this.pois[i]._id === poi_id) {
        return i;
      }
    }
  }

  // delete a poi from the local pois array
  async deletePoiInPoisArray(index) {
    this.pois.splice(index, 1);
    console.log('spliced poi from pois');
  }

  // Update a poi
  async updatePoi(id, name, description, categoryid, locationid) {
    const update = {
      name: name,
      description: description,
      category: categoryid,
      location: locationid
    };
    const response = await this.httpClient.post('/api/pois/update/' + id, update);
    if(this.scope == "admin")
    {
      await this.getAllPois();
    }
    else {
      await this.getPoisByUser();
    }
    await this.filterByAllCategories();
  }


  // CATEGORIES********************************************************************************************************

  // Get all categories
  async getCategories() {
    const response = await this.httpClient.get('/api/categories');
    this.categories = await response.content;
    console.log(this.categories);
  }

  // constructor of a new category in MongoDB and add it to the categories array on the client side
  async category(name: string) {
    const category = {
      name: name
    };
    const response = await this.httpClient.post('/api/categories', category);
    const newCategory = await response.content;
    this.categories.push(newCategory);
    console.log(this.categories);
  }

  // Delete a category
  async deleteCategory(id) {
    console.log(id);
    const response = await this.httpClient.delete('/api/categories/' + id);

    const poisInCategory = await this.findPoisInCategory(id);
    for (let i = 0; i < poisInCategory.length; i++) {
      const id = poisInCategory[i]._id;
      const index = await this.findPoiInPoisIndex(id);
      await this.deletePoiInPoisArray(index);
    }
    const index = await this.findCategoryIndex(id);
    await this.deleteLocalCategory(index);
    await this.filterByAllCategories();
  }

  // Find the index of the category in the client side categories array
  findCategoryIndex(category_id) {
    for (let i = 0; i < this.categories.length; i++) {
      console.log(this.categories[i]._id);
      if (this.categories[i]._id === category_id) {
        return i;
      }
    }
  }

  // Delete the Category from the client side array
  deleteLocalCategory(index) {
    this.categories.splice(index, 1);
  }

  // filter pois by the category they are in
  async filterByCategory(categoryId) {
    this.filter.splice(0, this.filter.length);
    const poisInCat = await this.findPoisInCategory(categoryId);
    for (let i = 0; i < poisInCat.length; i++) {
      this.filter.push(poisInCat[i]);
    }
    return this.filter;

  }

  // find the pois in a category and return them as an array.
  async findPoisInCategory(categoryId) {
    this.pois;
    const poisInCategory = [];
    for (let i = 0; i < this.pois.length; i++) {
      if (this.pois[i].category._id === categoryId) {
        poisInCategory.push(this.pois[i]);
      }
    }
    return poisInCategory;
  }

  // filter all pois that are in all categories
  async filterByAllCategories() {
    this.filter.splice(0, this.filter.length);
    for (let i = 0; i < this.pois.length; i++) {
      this.filter.push(this.pois[i]);
    }
    return this.filter;
  }


// LOCATION **********************************************************************************************************

  // constructor of a new Location
  async location(lat: number, lng: number) {
    const location = {
      lat: lat,
      lng: lng
    };
    const response = await this.httpClient.post('/api/locations', location);
    const newLocation = await response.content;
    return (newLocation);
  }

  // Update a location
  async updateLocation(id, location) {
    const editLocation = {
      lat: location.lat,
      lng: location.lng
    };
    await this.httpClient.post('/api/locations/update/' + id, editLocation);
  }


  //RATING ************************************************************************************************************

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


  //AUTHENTICATION ****************************************************************************************************

  // Check if user is already authenticated prior to asking the user to login or signup
  checkIsAuthenticated() {
    try {
      let authenticated = false;
      if (localStorage.poi !== 'null') {
        authenticated = true;
        this.httpClient.configure(http => {
          const auth = JSON.parse(localStorage.poi);
          http.withHeader('Authorization', 'bearer ' + auth.token);
        });

        this.changeRouter(PLATFORM.moduleName('app'));
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Method for signing up
  async signup(firstName: string, lastName: string, email: string, password: string) {
    let success = false;
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    try {
      // create a user
      let response = await this.httpClient.post('/api/users', user);
      let status = await response.content;
      // authenticate the user
      if (status.success) {
        response = await this.httpClient.post('/api/users/authenticate', { email: email, password: password });
        status = await response.content;
      }
      if (status.success) {
        this.httpClient.configure((configuration) => {
          configuration.withHeader('Authorization', 'bearer ' + status.token);
        });
        localStorage.poi = JSON.stringify(response.content);
        await this.getCategories();
        await this.getPoisByUser();
        // change the router to user routes
        this.changeRouter(PLATFORM.moduleName('app'));
        success = status.success;
      }
    } catch (e) {
      success = false;
    }
    return success;
  }


  // Method for login
  async login(email: string, password: string) {
    let success = false;
    try {
      // authenticate the user
      const response = await this.httpClient.post('/api/users/authenticate', { email: email, password: password });
      const status = await response.content;
      this.scope = status.scope[0];

      if (status.success) {
        this.httpClient.configure((configuration) => {
          configuration.withHeader('Authorization', 'bearer ' + status.token);
        });
        localStorage.poi = JSON.stringify(response.content);
        await this.getCategories();
        await this.filterByAllCategories();
        // if the user is an admin get all pois and categories and route to the admin route
        if (this.scope === 'admin') {
          await this.getAllPois();
          await this.filterByAllCategories();
          this.changeRouter(PLATFORM.moduleName('admin'));
        }
        // otherwise setup the user route
        else {
          await this.getPoisByUser();
          await this.filterByAllCategories();
          this.changeRouter(PLATFORM.moduleName('app'));
        }
        // number of pois
        this.total = this.pois.length;
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
