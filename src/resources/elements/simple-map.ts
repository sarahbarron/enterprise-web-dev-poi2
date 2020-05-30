import { Poi } from './../../services/poi-types';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { LeafletMap } from '../../services/leaflet-map';
import { messageUpdate, singlePoiMessage } from '../../services/messages';


/*
* Modal Class for the simple map on the create poi page
* */
@inject(EventAggregator)
export class SimpleMap {
  mapId = 'simple-map';
  mapHeight = 300;
  map: LeafletMap;


  // subscription to an event to add a poi marker to the make when a poi is created.
  constructor(private ea: EventAggregator) {
    ea.subscribe(messageUpdate, (msg) => {
      this.renderPoi(msg.poi);
    });
    ea.subscribe(singlePoiMessage, (msg) =>{
      this.renderPoi(msg.singlePoi);
    })
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
      location: { _id:'', lat: 53.2734, lng: -7.7783203 },
      zoom: 7,
      minZoom: 7,
    };
    this.map = new LeafletMap(this.mapId, mapConfig, 'Terrain');
    this.map.showZoomControl();
  }
}
