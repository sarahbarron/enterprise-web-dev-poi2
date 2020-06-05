import { bindable, inject } from 'aurelia-framework';
import { Poi, Category } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';


/*
* Class for the poi form input to add a poi to a users account
* */
@inject(PoiService)
export class CategoryFilter {

  @bindable categories: Category[];
  @bindable filter: Poi[] ;
  // @bindable pois: Poi[];

  selectedCategory: any = null;

  constructor(private ps: PoiService) {
    this.selectedCategory = "All Categories";
    this.applyFilter()
  }


  async applyFilter()
  {
    if(this.selectedCategory === "All Categories")
    {
       this.filter = await this.ps.filterByAllCategories();
    }
    else
    {
       this.filter = await this.ps.filterByCategory(this.selectedCategory._id);
    }
  }
}

