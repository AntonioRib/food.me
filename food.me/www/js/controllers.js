angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) { })

    .controller('CartCtrl', function ($scope, Users) {
        $scope.checks = Users.all();
    })
        .controller('RecomendadosCtrl', function ($scope, Foods) {
            $scope.foods = Foods.getByCategory("Recomendados");
        })
        .controller('CarneCtrl', function ($scope, Foods) {
            $scope.foods = Foods.getByCategory("Carnes");
        })
        .controller('PeixeCtrl', function ($scope, Foods) {
            $scope.foods = Foods.getByCategory("Peixes");
        })
        .controller('PizzaCtrl', function ($scope, Foods) {
            console.log("Entro no controler")
            $scope.foods = Foods.getByCategory("Pizzas");
        })
        .controller('FoodDetailCtrl', function ($scope, $stateParams, Foods) {
            console.log("Entro no controler")
            $scope.food = Foods.getById($stateParams.foodId);
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
