import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jsonFormatter from 'jsonformatter';
import routing from './tester.routes';

export class TesterController {
  /*@ngInject*/
  constructor($http, Auth) {
    'ngInject';

    this.$http = $http;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    if(!this.isLoggedIn) return this.$state.go('login');
    this.authUrl = '';
  }

  $onInit() {
    this.jsonData = {};
  }

  userlogin() {
    const { username, password } = this;
    this
      .$http
      .post(`${this.authUrl}/login`, { username, password })
      .then(({ data }) => (this.jsonData = data));
  }
}

export default angular.module('qPostmanApp.tester', [uiRouter, jsonFormatter])
  .config(routing)
  .component('tester', {
    template: require('./tester.pug'),
    controller: TesterController
  })
  .name;
