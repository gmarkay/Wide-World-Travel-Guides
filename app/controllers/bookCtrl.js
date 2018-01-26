angular.module('travelBooks').controller('BookCtrl', function ($scope, $q, $http) {
  let getBooks = () => {
    return $q((resolve, reject) => {
      $http
        .get('../data/guides.json')
        .then((books) => {
          resolve(books);

        })
        .catch((err) =>{
          reject(err);
        });
    });
    return getBooks;
  };

  getBooks()
  .then((allBooks)=>{
        $scope.bookList = allBooks.data.guides;
  })
});