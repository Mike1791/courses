(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserInfoService', 'MenuService'];
function SignupController(UserInfoService, MenuService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    $ctrl.saved = false;
    $ctrl.error = false;

    MenuService.getMenuItem($ctrl.user.dish)
    .then(function (result) {
      $ctrl.saved = UserInfoService.setInfo($ctrl.user);
    }, function(error) {
      $ctrl.error = true;
    });

  };
}


})();
