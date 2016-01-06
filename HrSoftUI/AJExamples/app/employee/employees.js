(function () {
    var id = 'employees';
    angular.module('ajExpApp')
           .controller(id, ['$scope','employeeDatacontext', employees])


    function employees($scope, datacontext) {
        $scope.employees = [];

        $scope.employee = {
            name: '',
            fatherName: '',
            village: ''
        }

        $scope.addEmployee = addEmployee;

        datacontext.employees().then(function (data) {
            $scope.employees = data
        });
      

        function addEmployee() {

            datacontext.addEmployee($scope.employee).then(function (data) {
                $scope.employees = data
            });


        }


    }

})();