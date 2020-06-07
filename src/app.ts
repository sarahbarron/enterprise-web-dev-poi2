import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

// Router for an authenticated user
export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Poi';
    config.options.pushState = true;
    // route to the home page and map
    config.map([
      {
        route: ['', 'map'],
        name: 'map',
        moduleId: PLATFORM.moduleName('views/map'),
        nav: true,
        title: 'Map'
      },

      // route to the add and list pois page
      {
        route: 'all-pois',
        name: 'pois',
        moduleId: PLATFORM.moduleName('views/list-pois'),
        nav: true,
        title: 'Pois'
      },
      // route to the add and list pois page
      {
        route: 'pois',
        name: 'pois',
        moduleId: PLATFORM.moduleName('views/pois'),
        nav: true,
        title: 'Add Poi'
      },

      // Route to view a single poi
      {
        route: 'singlepoi/:id',
        name: 'singlepoi',
        moduleId: PLATFORM.moduleName('views/singlepois'),
        nav: false,
        title: 'Poi'
      },

      // Route to update a poi
      {
        route: 'update/:id',
        name: 'update',
        moduleId: PLATFORM.moduleName('views/update'),
        nav: false,
        title: 'Update Poi'
      },

      // route to rate and review a poi to be finished
      {
        route: ['rating'],
        name: 'rating',
        moduleId: PLATFORM.moduleName('views/ratings'),
        nav: false,
        title: 'Rating'
      },

      // route to logout
      {
        route: 'logout',
        name: 'logout',
        moduleId: PLATFORM.moduleName('views/logout'),
        nav: true,
        title: 'Logout'
      }
    ]);
    this.router = router;
  }

}
