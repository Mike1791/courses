(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItemsToBuy();

  showList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [{ name: "cookies", quantity: 10 },
               { name: "apples", quantity: 5 },
               { name: "tomatoes", quantity: 7 },
               { name: "peaches", quantity: 8 },
               { name: "pack of tea", quantity: 1 }
              ];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = {
      name: itemsToBuy[itemIndex].name,
      quantity: itemsToBuy[itemIndex].quantity
    };
    boughtItems.push(item);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };}

})();
