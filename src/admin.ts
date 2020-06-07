import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

// Router for an authenticated administrator
export class Admin {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Admin';
    config.options.pushState = true;

    config.map([
      // Route to home page and map
      {
        route: ['', 'map'],
        name: 'map',
        moduleId: PLATFORM.moduleName('views/map'),
        nav: true,
        title: 'Map'
      },

      // route to view  pois page
      {
        route: 'all-pois',
        name: 'pois',
        moduleId: PLATFORM.moduleName('views/list-pois'),
        nav: true,
        title: 'View All Pois'
      },

      // route to Add a pois
      {
        route: 'pois',
        name: 'pois',
        moduleId: PLATFORM.moduleName('views/pois'),
        nav: true,
        title: 'Add Pois'
      },

      // route to categories list and add form
      {
        route: 'categories',
        name: 'categories',
        moduleId: PLATFORM.moduleName('views/categories'),
        nav: true,
        title: 'Categories'
      },

      // route to view and delete users
      {
        route: 'admin',
        name: 'admin',
        moduleId: PLATFORM.moduleName('views/admin'),
        nav: true,
        title: 'Users'
      },

      // route to view a single poi
      {
        route: 'singlepoi/:id',
        name: 'singlepoi',
        moduleId: PLATFORM.moduleName('views/singlepois'),
        nav: false,
        title: 'Poi'
      },

      // route to update a poi
      {
        route: 'update/:id',
        name: 'update',
        moduleId: PLATFORM.moduleName('views/update'),
        nav: false,
        title: 'Update Poi'
      },

      // route to rating and review - to be finished
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
