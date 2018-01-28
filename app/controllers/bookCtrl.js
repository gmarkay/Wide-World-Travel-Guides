'use strict';

angular.module('travelBooks').controller('BookCtrl', function ($scope,GuideFactory) {
  GuideFactory.getBooks()
  .then((bookData)=>{
        $scope.bookList = bookData.data.guides;
  });
});