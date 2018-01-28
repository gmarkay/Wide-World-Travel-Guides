'use strict';

angular.module('travelBooks', ['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/guide-list.html',
        controller: 'BookCtrl'
      })
  });