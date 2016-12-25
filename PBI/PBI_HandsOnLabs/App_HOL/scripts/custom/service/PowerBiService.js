

function ReportsService($http, baseUrl) {
    this.$http = $http;
    this.baseUrl = baseUrl;

    this.findAll = function () {
        var _this = this;
        return this.$http.get(this.baseUrl + "/api/reports")
            .then(function (response) { return response.data; })
            .then(function (reports) { return reports.map(_this.normalizeReport); });
    };
    this.findById = function (id, dxt) {
        if (dxt === void 0) { dxt = false; }
        var url = dxt ? this.baseUrl + "/api/dxt/reports/" + id : this.baseUrl + "/api/reports/" + id;
        return this.$http.get(url)
            .then(function (response) { return response.data; })
            .then(this.normalizeReport);
    };
    this.findByName = function (search) {
        var _this = this;
        return this.$http.get(this.baseUrl + "/api/reports?query=" + search)
            .then(function (response) { return response.data; })
            .then(function (reports) { return reports.map(_this.normalizeReport); });
    };
    this.normalizeReport = function (report) {
        report.type = "report";
        return report;
    };
    return ReportsService;
}
angular.module('HandsOnLabsModule').service('ReportsService', ReportsService);



function ReportsServiceProvider() {
    var baseUrl = '';
    return {
        setBaseUrl: function (url) {
            baseUrl = url;
        },
        $get: ['$http', function ($http) {
            return new ReportsService($http, baseUrl);
        }]
    };
}
angular.module('HandsOnLabsModule').provider('ReportsServiceProvider', ReportsServiceProvider);
