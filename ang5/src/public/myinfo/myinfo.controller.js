(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userinfo', 'MenuService'];
function MyInfoController(userinfo, MenuService) {
  var $ctrl = this;
  $ctrl.userinfo = userinfo;
  if ($ctrl.userinfo.registered) {
    MenuService.getMenuItem($ctrl.userinfo.dish)
    .then(function (result) {
      $ctrl.userinfo.dishData = result;
      console.log("ret: ", $ctrl.userinfo.dishData);
    }, function(error) {
      console.log("error: ", error);
    });
  }
}

})();
