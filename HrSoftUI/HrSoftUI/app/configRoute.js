(function () {

    angular.module('ajExpApp')
            .config(['$routeProvider', configRoute]);

    function configRoute($routeProvider) {
        $routeProvider.when('/employee', { templateUrl: 'employee/employees.html' })
                      .when('/salary', { templateUrl: 'salary/salary.html' })
                      .when('/', { templateUrl: 'index.html' });
                      
    }

})();