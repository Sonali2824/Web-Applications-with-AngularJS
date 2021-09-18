(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = "";

    $scope.displayNumeric = function () {
      var totalNameValue = calculatNumericForString($scope.name);
      $scope.totalValue = totalNameValue;
    };


    function calculatNumericForString(string) {
      const words=string.split(",");//item 1, item2, ,item3 are consideres as 4 items
      var l=words.length;

      var o = "";
      if(string=="")
      o="Please enter data first";
      else if(l<=3) {
        o="Enjoy!";
      }
      else {
        o="Too much!";
      }
      return o;
    }

  });

})();
