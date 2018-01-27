'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('tester', {
    url: '/tester',
    template: '<tester></tester>'
  });
}
