
function LandingPageController($scope, pbiService) {

    'use strict';

    $scope.landingPageModel = {
        title: 'Hands-on-labs'
    };

}

LandingPageController.$inject = ['$scope', 'PowerBiService'];
angular.module('HandsOnLabsModule').controller('LandingPageController', LandingPageController);