(function () {
    var id = 'employeeDatacontext';

    angular.module('ajExpApp')
            .factory(id, ['$http', '$q', employeeDatacontext]);



    
   

    function employeeDatacontext($http, $q) {
        var service = {
            employees: getEmployees,
            addEmployee: addEmployee
            };
    
        function addEmployee(employee) {
            var deferred = $q.defer();
            var url = 'http://localhost:52958/api/Employee/AddEmployee';
            $http({
                method: 'post',
                url: url,
                async: true,
                data: JSON.stringify(employee)
            })
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function getEmployees() {

            var deferred = $q.defer();
            var url = 'http://localhost:52958/api/Employee/Employees';
            $http({
                method: 'get',
                url: url,
                async: true
            })
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        return service;

    }



})();