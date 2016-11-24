var checks = [];
angular.module('starter.controllers', [])
    .controller('CartCtrl', function ($scope, $state, Users) {
        $scope.checks = checks;
        $scope.utilities = function () {
            $state.go('tab.utilities');
        }
        $scope.startPayment = function () {
            $state.go('payment');
        }
    })
    .controller('PaymentCtrl', function ($scope, $state, $ionicHistory) {
        $scope.checks = checks;
        $scope.payWhat = function () {
            $state.go('paymentWhat');
        };
        $scope.paymentMethods = function () {
            $state.go('paymentMethods');
        }
        $scope.end = function () {
            $state.go('end');
        }
        $scope.restart = function () {
            checks = []
            $scope.checks = checks
            $ionicHistory.clearCache().then(function () { $state.go('login') })
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

var fastForward = function () {
    alert('Pedido feito. O empregado vem, e serve a comida. Entretanto enquanto espera tambem poderia utilizar um pouco mais as utilities');
    document.getElementById("askBtn").innerHTML = "Pedir Novamente";
    document.getElementById("paymentBtn").style.display = '';
}

var finalize = function () {
    alert('Aparecera a forma proprietaria de pagar. Conforme o escolhido. E o cliente podera ir ao balcao pagar (caso seja dinheiro) / seguir as instrucoes no leitor (caso seja multibanco) / as formas das outras opcoes.');
}