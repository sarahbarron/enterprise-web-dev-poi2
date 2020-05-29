import { inject, bindable } from 'aurelia-framework';
import { PoiService } from '../../services/poi-service';
import { messageUpdate } from '../../services/messages';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(PoiService, EventAggregator)
export class TotalPois {
  @bindable
  total = 0;

  constructor(private ps: PoiService, private ea: EventAggregator) {
    this.total = ps.total;
    ea.subscribe(messageUpdate, msg => {
      this.total = msg.total;
    });
  }
}
