(function () {
    var id = 'employees';
    angular.module('hrApp')
           .controller(id, ['$scope', employees]);

    function employees($scope) {
        $scope.title = "Employees";
    }
})();