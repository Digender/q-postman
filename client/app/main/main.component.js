import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  /*@ngInject*/
  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }

  $onInit() {

  }

}

export default angular.module('qPostmanApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.pug'),
    controller: MainController
  })
  .name;
