
function LandingPageController($scope, ReportsService) {

    'use strict';

    $scope.landingPageModel = {
        title: 'Hands-on-labs'
    };

    $scope.reportData = ReportsService.findById('9103e180-24bf-478c-be9b-123e479375e6');
    console.log($scope.reportData);

}

LandingPageController.$inject = ['$scope', 'ReportsService'];
angular.module('HandsOnLabsModule').controller('LandingPageController', LandingPageController);