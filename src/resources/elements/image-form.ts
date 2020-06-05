import { bindable, inject } from 'aurelia-framework';
import { PoiService} from '../../services/poi-service';
import { Image} from '../../services/poi-types';

@inject(PoiService)
export class ImageForm {

  @bindable singlePoi;
  @bindable pois;

  selectedFiles: string[] = [];
  image: Image = {_id: '', url: '', public_id:''};

  constructor(private ps: PoiService) {
    this.singlePoi = this.ps.singlePoi
  }

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
  async addImage() {
    await this.selectedImage(this.selectedFiles[0]);
    const amendedPoi = await this.ps.addImageToPoi(this.singlePoi._id, this.image);
    // this.ps.getPoisByUser();
  }
}
