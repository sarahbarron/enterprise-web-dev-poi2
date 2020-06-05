import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

// Router for an authenticated user
export class Admin {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Admin";
    config.options.pushState = true;

    config.map([
      {
        route: ['','map'],
        name: 'map',
        moduleId: PLATFORM.moduleName('views/map'),
        nav: true,
        title: 'My Pois'
      },
      {
        route: 'pois',
        name: 'pois',
        moduleId: PLATFORM.moduleName('views/pois'),
        nav: true,
        title: 'Manage My Pois'
      },
      {
        route: 'users',
        name: 'users',
        moduleId: PLATFORM.moduleName(('views/users')),
        nav: true,
        title: 'Users',
      },
      {
        route: 'singlepoi/:id',
        name: 'singlepoi',
        moduleId: PLATFORM.moduleName('views/singlepois'),
        nav: false,
        title: 'Poi'
      },
      {
        route: 'update/:id',
        name: 'update',
        moduleId: PLATFORM.moduleName('views/update'),
        nav: false,
        title: 'Update Poi'
      },
      {
        route: ['rating'],
        name: 'rating',
        moduleId: PLATFORM.moduleName('views/ratings'),
        nav: true,
        title: 'Rating'
      },
      {
        route: ['categories'],
        name: 'categories',
        moduleId: PLATFORM.moduleName(('views/categories')),
        nav: true,
        title: 'Categories',
      },
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
