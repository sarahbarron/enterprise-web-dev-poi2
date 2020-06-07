import { inject } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { PoiService } from './services/poi-service';

// Router for an unauthenticated user
@inject(PoiService)
export class Start {
  router: Router;

  constructor(private ps: PoiService) {
  }
  // Route to login screen
  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: ['', 'login'],
        name: 'Login',
        moduleId: PLATFORM.moduleName('views/login'),
        nav: true,
        title: 'Login'
      },

      // Route to sign up
      {
        route: 'signup',
        name: 'signup',
        moduleId: PLATFORM.moduleName('views/signup'),
        nav: true,
        title: 'Signup'
      }
    ]);
    this.router = router;
  }

  attached() {
    this.ps.checkIsAuthenticated();
  }
}
