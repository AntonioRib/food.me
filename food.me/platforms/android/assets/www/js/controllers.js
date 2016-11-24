var checks = [];
angular.module('starter.controllers', [])
    .controller('CartCtrl', function ($scope, $state, Users) {
        $scope.checks = checks;
        $scope.utilities = function () {
            $state.go('tab.utilities');
        }
    })
        .controller('RecomendadosCtrl', function ($scope, Foods) {
            $scope.title = "Recomendados"
            $scope.foods = Foods.getByCategory("Recomendados");
        })
        .controller('CarneCtrl', function ($scope, Foods) {
            $scope.title = "Carnes"
            $scope.foods = Foods.getByCategory("Carnes");
        })
        .controller('PeixeCtrl', function ($scope, Foods) {
            $scope.title = "Peixes"
            $scope.foods = Foods.getByCategory("Peixes");
        })
        .controller('PizzaCtrl', function ($scope, Foods) {
            $scope.title = "Pizzas"
            $scope.foods = Foods.getByCategory("Pizzas");
        })
        .controller('FoodDetailCtrl', function ($scope, $state, $stateParams, Foods, Ingredients) {
            $scope.ingredients = Ingredients.all();
            $scope.food = Foods.getById($stateParams.foodId);
            $scope.ask = function () {
                checks[0].check += $scope.food.price
                $state.go('tab.recomendados');
            }
        })
        .controller('ChangePriceCtrl', function ($scope, $stateParams, Foods, Ingredients) {
            $scope.food = Foods.getById($stateParams.foodId);
            $scope.checkedOrNot = function (isChecked) {
                if (isChecked) {
                    $scope.food.price += 1;
                } else {
                    $scope.food.price -= 1
                }
            }
        })
        .controller('LoginCtrl', function ($scope, $state) {
            $scope.next = function () {
                $state.go('loginName');
            }
        })
        .controller('LoginNameCtrl', function ($scope, $state) {
            $scope.data = {};
            $scope.log = function () {
                 var user = {
                    id: 0,
                    name: $scope.data.username,
                    check: 0,
                }
                checks.push(user)
                $state.go('tab.cart');
            }
        })
        .controller("UtilitiesCtrl", function ($scope) {
        })



.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
});

