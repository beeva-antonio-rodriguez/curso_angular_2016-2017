'use strict';

/**
 * @ngdoc function
 * @name cursoAngular20162017App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cursoAngular20162017App
 */

moduleAngular.controller('FormCtrl', ['$scope', function($scope) {
  $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };

  $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);
