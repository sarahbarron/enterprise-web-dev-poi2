import { bindable, inject } from 'aurelia-framework';
import { Category } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';

/*
Form for creating a category
 */
@inject(PoiService)
export class CategoryForm {

  @bindable
  categories: Category[];
  name: string;

  constructor(private ps: PoiService) {}

  // creates a category using the input from user
  makeCategory() {
    this.ps.category(this.name);
  }

}
