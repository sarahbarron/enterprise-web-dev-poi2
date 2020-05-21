import { Poi, Rating, Category } from './poi-types';

export class PoiService{

  pois: Poi[] =[];
  ratings: Rating[] = [];
  categories: Category[] = [];
  totalPoi = 0;

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
    this.totalPoi = this.totalPoi + 1;
    console.log(this.poi);
    console.log(this.totalPoi);
  };

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
  };


}
