(function () {
    var id = "config";

    angular.module('hrApp')
           .config(['$routeProvider', config]);

    function config($routeProvider) {
        $routeProvider.when('/', { templateUrl: 'app/employee/employees.html' })
                      .when('/employee', { templateUrl: 'app/employee/employees.html' });
    }

})();