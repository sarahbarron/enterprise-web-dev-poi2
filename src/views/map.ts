import * as L from "leaflet";
import Map = L.Map;
import { LeafletMap } from '../services/leaflet-map';
import { PoiService } from '../services/poi-service';
import { inject } from 'aurelia-framework';
import { link } from 'fs';
import { Category } from '../services/poi-types';
import {Poi} from '../services/poi-types';

/* Map Modal Class - for map on the full page*/
@inject(PoiService)
export class Map {
  mapId = 'main-map';
  mapHeight = 600;
  map: LeafletMap;

  poi: Poi;

  constructor(private ds: PoiService) { }

  // Render all points of interest and retrieve their loction to place a marker on the map
  renderPois(link:boolean = true) {
    for (let poi of this.ds.pois) {
      const poiStr = link
        ? `<a href='/poi/${poi.name}'>${poi.name} <small>(click for details}</small></a>`
        : poi.name;
        // `${poi.category.name} ${poi.name}`;
      this.map.addMarker(poi.location, poiStr, 'POI');

    }
  }


  // setup of the map
  attached() {
    const mapConfig = {
      location: { _id: '', lat: 52.865196, lng: -7.97946 },
      zoom: 8,
      minZoom: 1
    };
    this.map = new LeafletMap(this.mapId, mapConfig, 'Terrain');
    this.map.showZoomControl();
    this.map.addLayerGroup('POI');
    this.map.showLayerControl();
    this.renderPois();
  }
}
