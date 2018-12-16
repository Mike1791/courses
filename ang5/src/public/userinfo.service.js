(function () {
"use strict";

angular.module('public')
.service('UserInfoService', UserInfoService);

UserInfoService.$inject = ['MenuService'];
function UserInfoService(MenuService) {
  var service = this;
  var userData = {registered: false};

  service.setInfo = function (data) {
    userData = data;
    userData.registered = true;
    return true;
  };

  service.getInfo = function () {
    return userData;
  };
}

})();
