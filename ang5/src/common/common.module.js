(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://mrb-ang5server.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
