(function () {
    var id = 'topnav';

    angular.module('ajExpApp')
           .controller(id, ['$scope',topnav]);



    function topnav($scope) {
        $scope.salaryHide = false;
    }

})();