'use strict';

angular.module('travelBooks').factory('GuideFactory', function ($q, $http) {
  let getBooks = () => {
    return $q((resolve, reject) => {
      $http
        .get('../data/guides.json')
        .then((guideBooks) => {
          resolve(guideBooks);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return { getBooks };
})