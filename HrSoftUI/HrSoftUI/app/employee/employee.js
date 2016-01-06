(function () {
    var id = 'employee';
    angular.module('hrApp')
           .controller(id, ['$scope', employee]);

    function employee($scope) {
        
        $scope.title = "Employee";
        $scope.clickme = function clickme() {
            alert("Hi");
        }

    }
})();