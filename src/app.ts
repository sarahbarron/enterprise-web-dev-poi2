import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: ['', 'pois'],
        name: 'Pois',
        moduleId: PLATFORM.moduleName('views/pois'),
        nav: true,
        title: 'Pois'
      }
    ]);
    this.router = router;
  }
}
