(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'menuList.html',
    scope: {
      list: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.found = [];
  list.searchTerm = "";

  list.getItems = function() {
    MenuSearchService.getMatchedMenuItems(list.searchTerm)
      .then(function (response) {
      list.found = response;
    });
  };

  list.onRemove = function (itemIndex) {
    list.found.splice(itemIndex, 1);
  };

  list.notFound = function() {
      return (list.found.length===0);
  }
 }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
          }).then(function (result) {
          var foundItems = [];
          var resultItems = result.data.menu_items;
          if (!searchTerm) {
            return foundItems;
          }

          for (var i = 0; i < resultItems.length; i++) {
            var name = resultItems[i].name;
            if (name.toLowerCase().indexOf(searchTerm) !== -1) {
              foundItems.push(resultItems[i]);
            }
          }
          return foundItems;
      });
    };

}

})();
