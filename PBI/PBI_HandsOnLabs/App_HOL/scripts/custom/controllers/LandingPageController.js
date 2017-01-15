
function LandingPageController($scope) {

    'use strict';

    $scope.landingPageModel = {
        title: 'Hands-on-labs'
    };

    $scope.config = {
        workspaceCollection: 'pbiwchols',
        workspaceId: 'f1af7361-f57f-4c80-81a7-cd96f3906ef0',
        reportId: '9bfcfa5a-5220-4919-b86b-fe90bcc6c03a',
        type: 'report',
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXIiOiIwLjIuMCIsIndjbiI6InBiaXdjaG9scyIsIndpZCI6ImYxYWY3MzYxLWY1N2YtNGM4MC04MWE3LWNkOTZmMzkwNmVmMCIsInJpZCI6IjliZmNmYTVhLTUyMjAtNDkxOS1iODZiLWZlOTBiY2M2YzAzYSIsImlzcyI6IlBvd2VyQklTREsiLCJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiZXhwIjoxNDg0NDk3NzUxLCJuYmYiOjE0ODQ0ODY5NTF9.jF4OFmoE9b3adC6BZhNzGEtfxZ1AmtBJxizNgz5pN24',
        embedUrl: 'https://embedded.powerbi.com/appTokenReportEmbed',
        id: '9bfcfa5a-5220-4919-b86b-fe90bcc6c03a',
        settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: true
        }
    };

    $scope.showReport = function () {

        // Grab the reference to the div HTML element that will host the report.
        $scope.reportContainer = angular.element('#reportContainer')[0];

        // Embed the report and display it within the div container.
        $scope.report = powerbi.embed(reportContainer, $scope.config);

        // Report.off removes a given event handler if it exists.
        $scope.report.off("loaded");

        // Report.on will add an event handler which prints to Log window.
        $scope.report.on("loaded", function (event) { });
        // Report.on will add an event handler which prints to Log window.
        $scope.report.on("pageChanged", function (event) { });
        //handling error event
        $scope.report.on("error", function (event) { });

    };

}

LandingPageController.$inject = ['$scope'];
angular.module('HandsOnLabsModule').controller('LandingPageController', LandingPageController);
