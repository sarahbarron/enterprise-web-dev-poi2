import { bindable, inject } from 'aurelia-framework';
import { Poi, Category, Location } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';
import { EventAggregator } from 'aurelia-event-aggregator';
import { singlePoiMessage } from '../../services/messages';

/*
* Class for the poi form input to add a poi to a users account
* */
@inject(PoiService, EventAggregator)
export class SinglePoi {

  @bindable poi;
  constructor(private ps: PoiService, private ea: EventAggregator) {
    this.poi = ps.singlePoi;
    ea.subscribe(singlePoiMessage, msg => {
      this.poi = msg.singlePoi;
    });
  }

}
