
(function () {

    "use strict";

    angular.module('HandsOnLabsModule', ['ngAnimate', 'ui.router', 'ngMaterial', 'powerbi']);

    configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider', '$mdThemingProvider'];
    function configFunction($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider, $mdThemingProvider) {

        $locationProvider.html5Mode({ enabled: true, requireBase: false });

        $urlRouterProvider.otherwise('/App_HOL');
    }

    angular.module('HandsOnLabsModule').config(configFunction);

})();