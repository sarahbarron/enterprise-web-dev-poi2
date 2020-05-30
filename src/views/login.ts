import { inject } from 'aurelia-framework';
import { PoiService } from '../services/poi-service';


/* Login modal class*/
@inject(PoiService)
export class Login {
  email = 'marge@simpson.com';
  password = 'secret';
  prompt = '';

  constructor(private ps: PoiService) {}

  async login(e) {
    console.log(`Trying to log in ${this.email}`);
    const success = await this.ps.login(this.email, this.password);
    if(!success){
      this.prompt="Oops! Try again ...";
    }
  }
}
