import { bindable, inject } from 'aurelia-framework';
import { Poi, Category, Location,Image } from '../../services/poi-types';
import { PoiService } from '../../services/poi-service';


/*
* Class for the poi form input to add a poi to a users account
* */
@inject(PoiService)
export class PoiForm {

  // @bindable pois: Poi[];
  @bindable categories: Category[];
  name: string;
  description: string;
  selectedCategory: Category = null;
  location: Location = { _id:'', lat: 53.2734, lng: -7.7783203 };
  image: Image = {_id: '', url: '', public_id: ''};
  selectedFiles: string[] = [];

  constructor(private ps: PoiService) {}


  async selectedImage(imageFile){
    var formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'er9yfp5t');
    const response = await this.ps.uploadImage(formData);
    this.image = response;
    console.log(this.image);
  }
  //
  // Method to add the poi
  async addPoi() {
    await this.selectedImage(this.selectedFiles[0]);
    this.ps.poi(this.name, this.selectedCategory, this.description, this.location, this.image);
  }
}

