
function LandingPageController($scope) {

    'use strict';

    $scope.landingPageModel = {
        title: 'Hands-on-labs'
    };

   
}
LandingPageController.$inject = ['$scope'];
angular.module('HandsOnLabsModule').controller('LandingPageController', LandingPageController);