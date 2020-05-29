import { Poi } from './../../services/poi-types';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { LeafletMap } from '../../services/leaflet-map';
import { messageUpdate } from '../../services/messages';
import {PoiService} from '../../services/poi-service';

@inject(EventAggregator)
export class SimpleMap {
  mapId = 'simple-map';
  mapHeight = 300;
  map: LeafletMap;


  constructor(private ea: EventAggregator) {
    ea.subscribe(messageUpdate, (msg) => {
      this.renderPoi(msg.poi);
    });
  }


  renderPoi(poi: Poi) {
    if (this.map) {
      const poiStr = `${poi.category.name} ${poi.name} `;
      this.map.addMarker(poi.location, poiStr);
      this.map.moveTo(12, poi.location);
    }
  }


  attached() {
    const mapConfig = {
      location: { _id:'', lat: 53.2734, lng: -7.7783203 },
      zoom: 7,
      minZoom: 7,
    };
    this.map = new LeafletMap(this.mapId, mapConfig, 'Terrain');
    this.map.showZoomControl();
  }
}
