(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var showList =  this;

  showList.items = ShoppingListCheckOffService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList1 = this;
  showList1.items = ShoppingListCheckOffService.getItems1();
}


function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var items = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];

var items1=[];

  service.removeItem = function (itemIndex) {
    const element = items[itemIndex];
    items.splice(itemIndex, 1);
    items1.push(element);
  };

  service.getItems = function () {
    return items;
  };
  service.getItems1 = function () {
    return items1;
  };
}

})();
