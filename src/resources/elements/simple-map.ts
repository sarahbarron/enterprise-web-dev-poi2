import { Poi } from './../../services/poi-types';
import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { LeafletMap } from '../../services/leaflet-map';
import { messageUpdate } from '../../services/messages';
import { PoiService } from '../../services/poi-service';


/*
* Modal Class for the simple map on the create poi page
* */
@inject(EventAggregator, PoiService)
export class SimpleMap {
  mapId = 'simple-map';
  mapHeight = 500;
  map: LeafletMap;

  @bindable singlePoi;

  // subscription to an event to add a poi marker to the make when a poi is created.
  constructor(private ea: EventAggregator, private ps: PoiService) {

    ea.subscribe(messageUpdate, (msg) => {
      this.renderPoi(msg.poi);
    });

    this.singlePoi = this.ps.singlePoi;

  }

  // Add a marker on the map for each location
  renderPoi(poi: Poi) {
    if (this.map) {
      const poiStr = `${poi.category.name} ${poi.name} `;
      this.map.addMarker(poi.location, poiStr);
      this.map.moveTo(12, poi.location);
    }
  }

  // Initial map setup and view
  attached() {
    const mapConfig = {
      location: { _id: '', lat: 52.865196, lng: -7.97946 },
      zoom: 7,
      minZoom: 7
    };
    this.map = new LeafletMap(this.mapId, mapConfig, 'Terrain');
    this.map.showZoomControl();

    if (this.singlePoi != null) {
      this.renderPoi(this.singlePoi);
    }

  }
}
