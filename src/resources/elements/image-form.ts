import { bindable, inject } from 'aurelia-framework';
import { PoiService } from '../../services/poi-service';
import { Image } from '../../services/poi-types';

// Form to add an image
@inject(PoiService)
export class ImageForm {

  @bindable singlePoi;
  @bindable pois;

  selectedFiles: string[] = [];
  image: Image = { _id: '', url: '', public_id: '' };

  constructor(private ps: PoiService) {
    this.singlePoi = this.ps.singlePoi;
  }

  // selected Image method to post to cloudinary
  async selectedImage(imageFile) {
    var formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'er9yfp5t');
    const response = await this.ps.uploadImage(formData);
    this.image = response;
    console.log(this.image);
  }

  // Method to add send image file to cloudinary and store image details in db
  async addImage() {
    await this.selectedImage(this.selectedFiles[0]);
    const amendedPoi = await this.ps.addImageToPoi(this.singlePoi._id, this.image);
  }
}
