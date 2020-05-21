import { inject } from 'aurelia-framework';
import { PoiService } from '../services/poi-service';

@inject(PoiService)
export class Signup {
  firstName = 'Marge';
  lastName = 'Simpson';
  email = 'marge@simpson.com';
  password = 'secret';

  constructor(private ps: PoiService) {}
  signup(e) {
    console.log(`Trying to sign up ${this.email}`);
    this.ps.signup(this.firstName, this.lastName, this.email, this.password);
  }
}
