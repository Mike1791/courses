(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'MenuDataService', 'items'];
function ItemsController($stateParams, MenuDataService, items) {
  var $ctrl = this;
  $ctrl.category = items.category.name;
  $ctrl.items = items.menu_items;
}

})();
