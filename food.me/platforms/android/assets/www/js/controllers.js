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
                if(confirm("Unfortunately there is no user feature way of removing food your order (yet). If you need to remove anything from your order go on the Utilities tab call a waiter and ask him")){
                    checks[0].totalToPay += $scope.food.price
                    checks[0].foodOrdered.push($scope.food.name + " - " + $scope.food.price);
                    $state.go('tab.recomendados');
                } else {}
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
                    totalToPay: 0,
                    foodOrdered: [],
                }
                checks.push(user)
                $state.go('tab.cart');
            }
        })
        .controller("UtilitiesCtrl", function ($scope) {
        })


var fastForward = function () {
    if (confirm("If you decide to finalize your order you will have to pay for what you ordered. Are you sure you want to order?")) {
        alert('Order made. The waiter comes and serves the meal. Meanwhile, while you wait you could also use our utilities.');
        document.getElementById("askBtn").innerHTML = "Order Again";
        document.getElementById("paymentBtn").style.display = '';
    } else {}
}

var finalize = function () {
    alert('Propietary forms of paying according to the method chosen. The client could go to the balcony and pay (if money is chosen) / follow instructions on the screen (if Card is chosen) / And the same for the other methods of payment.');
}