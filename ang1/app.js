(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.advice = "";

  $scope.checkDishes = function () {
    var advice = getAdvice($scope.dishes);
    $scope.advice = advice;
  };

  function getAdvice(dishes) {
    var dishesCount = countDishes(dishes);

    if (dishesCount == 0)
      return "Please enter data first";
    else if (dishesCount <= 3)
      return "Enjoy!";
    else
      return "Too much!";
  }

  function countDishes(dishes) {
    var count = 0;
    var arrDishes = dishes.split(',');

    for (var i = 0; i < arrDishes.length; i++) {
      if (arrDishes[i].trim() != "")
        count++;
    }

    return count;
  }

};


})();
