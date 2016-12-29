
function LandingPageController($scope) {

    'use strict';

    $scope.landingPageModel = {
        title: 'Hands-on-labs'
    };

    $scope.config = {
        workspaceCollection: 'PBIWorkspaceHOLs',
        workspaceId: 'cfcd5012-232d-461b-9158-79d3bebc8ac4',
        reportId: '86d71fe2-0230-4fc5-ae3a-81a47b86a1e2',
        type: 'report',
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXIiOiIwLjIuMCIsImF1ZCI6Imh0dHBzOi8vYW5hbHlzaXMud2luZG93cy5uZXQvcG93ZXJiaS9hcGkiLCJpc3MiOiJQb3dlciBCSSBOb2RlIFNESyIsIndjbiI6IlBCSVdvcmtzcGFjZUhPTHMiLCJ3aWQiOiJjZmNkNTAxMi0yMzJkLTQ2MWItOTE1OC03OWQzYmViYzhhYzQiLCJyaWQiOiI4NmQ3MWZlMi0wMjMwLTRmYzUtYWUzYS04MWE0N2I4NmExZTIiLCJuYmYiOjE0ODMwMjcxODAsImV4cCI6MTQ4MzAzMDc4MH0.xIZDtsD6m-l_C-613lA2WZcq-b7X1Sdv2UEIOgPS6yg',
        embedUrl: 'https://embedded.powerbi.com/appTokenReportEmbed',
        id: '86d71fe2-0230-4fc5-ae3a-81a47b86a1e2',
        settings: {
            filterPaneEnabled: true,
            navContentPaneEnabled: true
        }
    };

    $scope.showReport = function () {
       
            // Grab the reference to the div HTML element that will host the report.
            $scope.reportContainer = angular.element('#reportContainer')[0];

            // Embed the report and display it within the div container.
            $scope.report = powerbi.embed(reportContainer, $scope.config);

            console.log($scope.report);
            console.log(powerbi.embeds);

            // Report.off removes a given event handler if it exists.
            $scope.report.off("loaded");

            // Report.on will add an event handler which prints to Log window.
            $scope.report.on("loaded", function (event) {
                console.log(event);
            });
            // Report.on will add an event handler which prints to Log window.
            $scope.report.on("pageChanged", function (event) {
                console.log(event);
            });
            //handling error event
            $scope.report.on("error", function (event) {
            });
        
    };

}

LandingPageController.$inject = ['$scope'];
angular.module('HandsOnLabsModule').controller('LandingPageController', LandingPageController);
