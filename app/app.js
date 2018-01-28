'use strict';

angular.module('travelBooks', ['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/books.html',
        controller: 'BookCtrl'
      })
  });