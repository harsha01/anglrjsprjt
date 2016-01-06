(function () {

    var id = 'salary';
    angular.module('ajExpApp')
            .controller(id, ['$scope',salary]);


    function salary($scope) {
        $scope.title = 'Salary Template';
    }
})();