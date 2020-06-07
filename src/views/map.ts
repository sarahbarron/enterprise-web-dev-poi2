import { LeafletMap } from '../services/leaflet-map';
import { PoiService } from '../services/poi-service';
import { inject } from 'aurelia-framework';
import { Poi } from '../services/poi-types';

/* Map Modal Class - for map on the full page*/
@inject(PoiService)
export class Map {
  mapId = 'main-map';
  mapHeight = 900;
  map: LeafletMap;
  pois: Poi[];


  constructor(private ds: PoiService) {
  }

  // Render points of interest and retrieve their location to place a marker on the map
  renderPois(link: boolean = true) {
    for (let poi of this.ds.pois) {
      const poiStr = link
        ? `<a href='/singlepoi/${poi._id}'>${poi.category.name}<br>${poi.name} <small>(click for details}</small></a>`
        : poi.name;

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
