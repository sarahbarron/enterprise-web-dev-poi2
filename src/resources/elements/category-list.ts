import { bindable } from 'aurelia-framework';
import {Category} from '../../services/poi-types';
/*
* List of all categories
* */
export class CategoryList{
  @bindable
  categories: Category[];
}
