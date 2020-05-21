import {bindable, inject} from 'aurelia-framework';
import { Category } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';

@inject(PoiService)
export class CategoryForm {

  @bindable
  categories: Category[];
  name: string;

  constructor(private ps: PoiService) {
  }
  makeCategory(){
    this.ps.category(this.name);
  }

}
