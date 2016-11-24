// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
           .state('tab', {
               url: '/tab',
               abstract: true,
               templateUrl: 'templates/tabs.html'
           })
    // Each tab has its own nav history stack:
           .state('login', {
               url: '/login',
               templateUrl: 'templates/login.html',
               controller: "LoginCtrl"

           })
           .state('loginName', {
               url: '/loginName',
               templateUrl: 'templates/loginName.html',
               controller: "LoginNameCtrl"
           })
           .state('payment', {
               url: '/payment',
               templateUrl: 'templates/payment.html',
               controller: "PaymentCtrl"
           })
           .state('paymentWhat', {
               url: '/paymentWhat',
               templateUrl: 'templates/paymentWhat.html',
               controller: "PaymentCtrl"
           })
           .state('paymentMethods', {
               url: '/paymentMethods',
               templateUrl: 'templates/paymentMethods.html',
               controller: "PaymentCtrl"
           })
           .state('end', {
               url: '/end',
               templateUrl: 'templates/end.html',
               controller: "PaymentCtrl"
           })
           .state('tab.cart', {
               url: '/cart',
               views: {
                   'tab-cart': {
                       templateUrl: 'templates/foodCart.html',
                       controller: 'CartCtrl'
                   }
               }
           })
           .state('tab.recomendados', {
               url: '/recomendados',
               views: {
                   'tab-recomendados': {
                       templateUrl: 'templates/tab-food.html',
                       controller: 'RecomendadosCtrl'
                   }
               }
           })
          .state('tab.carne', {
              url: '/carne',
              views: {
                  'tab-carne': {
                      templateUrl: 'templates/tab-food.html',
                      controller: 'CarneCtrl'
                  }
              }
          })
         .state('tab.peixe', {
             url: '/peixe',
             views: {
                 'tab-peixe': {
                     templateUrl: 'templates/tab-food.html',
                     controller: 'PeixeCtrl'
                 }
             }
         })
         .state('tab.pizza', {
             url: '/pizza',
             views: {
                 'tab-pizza': {
                     templateUrl: 'templates/tab-food.html',
                     controller: 'PizzaCtrl'
                 }
             }
         })
         .state('tab.food-detail', {
             url: '/food/:foodId',
             views: {
                 'tab-recomendados': {
                     templateUrl: 'templates/food-detail.html',
                     controller: 'FoodDetailCtrl'
                 }
             }
         })
         .state('tab.utilities', {
             url: '/utilities',
             views: {
                 'tab-recomendados': {
                     templateUrl: 'templates/tab-utilities.html',
                     controller: 'UtilitiesCtrl'
                 }
             }
         });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});
