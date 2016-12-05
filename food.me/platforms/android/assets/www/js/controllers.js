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
        var numberOfSelected = 0;
        $scope.changeNumberSelected = function (selected) {
            if(selected)
                numberOfSelected++
            else
                numberOfSelected--
        }
        $scope.numberSelected = function () {
            return numberOfSelected == 0
        }

        var paymentsSelected = 0;
        $scope.changePaymentsSelected = function (selected) {
            if (selected)
                paymentsSelected++
            else
                paymentsSelected--
        }
        $scope.paymentsSelected = function () {
            return paymentsSelected == 0
        }
        $scope.paymentChoice = 'Money'
    })
        .controller('RecomendadosCtrl', function ($scope, Foods) {
            $scope.title = "Recommended"
            $scope.foods = Foods.getByCategory("Recommended");
        })
        .controller('CarneCtrl', function ($scope, Foods) {
            $scope.title = "Meat"
            $scope.foods = Foods.getByCategory("Meat");
        })
        .controller('PeixeCtrl', function ($scope, Foods) {
            $scope.title = "Fish"
            $scope.foods = Foods.getByCategory("Fish");
        })
        .controller('PizzaCtrl', function ($scope, Foods) {
            $scope.title = "Pizzas"
            $scope.foods = Foods.getByCategory("Pizzas");
        })
        .controller('FoodDetailCtrl', function ($scope, $state, $stateParams, Foods, Ingredients) {
            $scope.ingredients = Ingredients.all();
            $scope.food = Foods.getById($stateParams.foodId);
            $scope.ask = function () {
                //TODO need to change this to have all the foods ordered
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


var fastForward = function () {
    alert('Pedido feito. O empregado vem, e serve a comida. Entretanto enquanto espera tambem poderia utilizar um pouco mais as utilities');
    document.getElementById("askBtn").innerHTML = "Pedir Novamente";
    document.getElementById("paymentBtn").style.display = '';
}

var finalize = function () {
    alert('Aparecera a forma proprietaria de pagar. Conforme o escolhido. E o cliente podera ir ao balcao pagar (caso seja dinheiro) / seguir as instrucoes no leitor (caso seja multibanco) / as formas das outras opcoes.');
}