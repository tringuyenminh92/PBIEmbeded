
(function () {

    "use strict";

    angular.module('HandsOnLabsModule', ['ngAnimate', 'ui.router', 'ngMaterial']);

    configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider', '$mdThemingProvider'];
    function configFunction($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider, $mdThemingProvider) {

        //$mdThemingProvider.theme('default').primaryPalette('blue', {
        //    'default': '800',
        //    'hue-1': '500',
        //    'hue-2': '600',
        //    'hue-3': '900'
        //}).accentPalette('green');

        $locationProvider.html5Mode({ enabled: true, requireBase: false });

        $urlRouterProvider.otherwise('/App_HOL');
    }

    angular.module('HandsOnLabsModule').config(configFunction);

})();