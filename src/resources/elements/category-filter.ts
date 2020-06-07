import { bindable, inject } from 'aurelia-framework';
import { Poi, Category } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';


/*
* Class to allowing filtering of Poi by category
* */
@inject(PoiService)
export class CategoryFilter {

  @bindable categories: Category[];
  @bindable filter: Poi[];

  selectedCategory: any = null;

  constructor(private ps: PoiService) {
    this.selectedCategory = 'All Categories';
  }

  // method to filter pois by category if user selected all
  // categories filter all pois otherwise filter by user choice
  async applyFilter() {
    if (this.selectedCategory === 'All Categories') {
      this.filter = await this.ps.filterByAllCategories();
    } else {
      this.filter = await this.ps.filterByCategory(this.selectedCategory._id);
    }
  }
}

