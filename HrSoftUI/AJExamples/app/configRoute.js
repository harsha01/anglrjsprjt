(function () {

    angular.module('ajExpApp')
            .config(['$routeProvider', configRoute]);

    function configRoute($routeProvider) {
        $routeProvider.when('/employee', { templateUrl: 'app/employee/employees.html' })
                      .when('/salary', { templateUrl: 'app/salary/salary.html' })
                      .when('/', { templateUrl: 'index.html' });

    }

})();