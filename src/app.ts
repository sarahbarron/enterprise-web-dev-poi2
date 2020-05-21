import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: ['', 'pois'],
        name: 'pois',
        moduleId: PLATFORM.moduleName('views/pois'),
        nav: true,
        title: 'Pois'
      },
      {
        route:['rating'],
        name: 'rating',
        moduleId: PLATFORM.moduleName('views/ratings'),
        nav: true,
        title: 'Rating'
      },
      {
        route:['categories'],
        name: 'categories',
        moduleId: PLATFORM.moduleName(('views/categories')),
        nav: true,
        title: 'Categories',
      }
    ]);
    this.router = router;
  }
}
