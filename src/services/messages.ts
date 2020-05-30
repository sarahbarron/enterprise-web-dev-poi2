import { Poi } from './poi-types';

/*
* Message for publishing an event, published each time there is a poi added
* */
export class messageUpdate {
  total: number;
  poi: Poi;
  constructor(total: number, poi: Poi) {
    this.total = total;
    this.poi = poi;
  }
}

export class singlePoiMessage{
  singlePoi: Poi;
  constructor(singlePoi: Poi) {
    this.singlePoi = singlePoi
  }
}
