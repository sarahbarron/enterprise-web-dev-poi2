import {bindable} from 'aurelia-framework';
import { Category } from '../../services/poi-types';

export class CategoryForm {

  name: string;

  @bindable
  categories: Category[] = [];

  makeCategory(){
    const category = {
      name: this.name,
    };
    this.categories.push(category);
    console.log(this.categories);
  }

}
