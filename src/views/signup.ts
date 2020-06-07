import { inject } from 'aurelia-framework';
import { PoiService } from '../services/poi-service';

/*Signup modal class*/
@inject(PoiService)
export class Signup {
  firstName = 'Marge';
  lastName = 'Simpson';
  email = 'marge@simpson.com';
  password = 'secret';
  prompt = '';

  constructor(private ps: PoiService) {
  }

  async signup(e) {
    console.log(`Trying to sign up ${this.email}`);
    const success = await this.ps.signup(this.firstName, this.lastName, this.email, this.password);
    console.log('Success : ' + success);
    if (!success) {
      this.prompt = 'Oops! Try again...';
    }
  }
}
