import { bindable, inject } from 'aurelia-framework';
import { Poi, Category, Location, Image } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';
import { Router } from 'aurelia-router';


/*
* Class for update poi form
* */
@inject(PoiService)
export class UpdateForm {

  @bindable categories: Category[];
  @bindable locations: Location[];
  @bindable currentPoi: Poi;
  name: string;
  description: string;
  selectedCategory: Category = null;
  location: Location;
  message = null;
  error = null;

  constructor(private ps: PoiService, private router: Router) {
  }


  // Method to update the poi
  async updatePoi() {

    if (this.location.lat != this.currentPoi.location.lat || this.location.lng != this.currentPoi.location.lng) {
      await this.ps.updateLocation(this.currentPoi.location._id, this.location);
    }
    this.error = await this.ps.updatePoi(this.currentPoi._id, this.name, this.description, this.selectedCategory._id, this.location._id);
    this.message = 'Update Complete';
  }
}

