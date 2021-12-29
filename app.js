(function () {
  'use strict';

  angular
    .module('ShoppingListApp', [])
    .controller('ToBuyCtrl', ToBuyCtrl)
    .controller('BoughtCtrl', BoughtCtrl)
    .controller('Message')
    .service('ShoppingListService', ShoppingListService);

  ToBuyCtrl.$inject = ['ShoppingListService'];
  function ToBuyCtrl(ShoppingListService) {
    var showList = this;

    showList.show = ShoppingListService.getItems();

    showList.alreadyBought = function (itemIndex, itemName, quantity) {
      ShoppingListService.alreadyBought(itemIndex, itemName, quantity);
    };
  }

  BoughtCtrl.$inject = ['ShoppingListService'];
  function BoughtCtrl(ShoppingListService) {
    var bought = this;

    bought.show = ShoppingListService.getBought();
    bought.message = 'check';

    // bought.removeItem = function (itemIndex) {
    //   ShoppingListService.removeItem(itemIndex);
    // };
  }

  function ShoppingListService() {
    var service = this;

    // List of shopping items
    var items = [
      { name: 'cookies', qty: 10 },
      { name: 'milk', qty: 5 },
      { name: 'bananas', qty: 4 },
      { name: 'orange', qty: 3 },
      { name: 'apple', qty: 2 },
    ];

    var boughtItems = [];

    service.alreadyBought = function (itemIndex, itemName, quantity) {
      var item = {
        name: itemName,
        qty: quantity,
      };
      boughtItems.push(item);

      items.splice(itemIndex, 1);

      if (boughtItems.length === 5) {
        bought.message = 'nothing here';
      }
    };

    service.getItems = function () {
      return items;
    };
    service.getBought = function () {
      return boughtItems;
    };
  }
})();
