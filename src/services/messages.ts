import { Poi } from './poi-types';

export class messageUpdate {
  total: number;
  poi: Poi;
  constructor(total: number, poi: Poi) {
    this.total = total;
    this.poi = poi;
  }
}
