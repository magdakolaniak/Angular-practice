(function () {
  'use strict';

  angular
    .module('LunchChecker', [])

    .controller('LunchCt', function ($scope) {
      $scope.items = '';
      $scope.totalValue = 0;
      $scope.display;
      $scope.message = '';

      $scope.howMany = function () {
        var input = $scope.items;
        $scope.display = input.split(',').length;
        console.log(input.split(','));

        if ($scope.display > 1 && $scope.display <= 3) {
          $scope.message = 'Enjoy!';
        } else if ($scope.display >= 4) {
          $scope.message = "That's too much";
        } else $scope.message = 'Please add something';
      };
    });
})();
