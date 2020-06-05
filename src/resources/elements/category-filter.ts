import { bindable, inject } from 'aurelia-framework';
import { Poi, Category, Location,Image } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';


/*
* Class for the poi form input to add a poi to a users account
* */
@inject(PoiService)
export class CategoryFilter {

  @bindable categories: Category[];
  @bindable categoryfilter: Poi[] ;
  selectedCategory: any = null;

  constructor(private ps: PoiService) {}


  async filter()
  {
    if(this.selectedCategory === "All Categories")
    {
     this.ps.filterByAllCategories();
    }
    else
    {
      console.log(this.selectedCategory);
      this.ps.filterByCategory(this.selectedCategory._id);
    }
  }
}

