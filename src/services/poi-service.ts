import {inject} from 'aurelia-framework';
import { Poi, Rating, Category } from './poi-types';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class PoiService{

  pois: Poi[] =[];
  ratings: Rating[] = [];
  categories: Category[] = [];
  total = 0;

  constructor(private httpClient: HttpClient) {
    httpClient.configure(http => {
      http.withBaseUrl('http://localhost:8080');
    });
    this.getCategories();
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
