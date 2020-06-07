import { bindable, inject } from 'aurelia-framework';
import { Category } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';

/*
* List of all categories
* */
@inject(PoiService)
export class CategoryList {
  @bindable
  categories: Category[];

  constructor(private ps: PoiService) {
  }

  // Deletes a category
  async deleteCategory(id) {
    await this.ps.deleteCategory(id);
  }
}
