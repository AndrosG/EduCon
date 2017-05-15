angular.module('starter')
  .controller('LoginCtrl', loginCtrl);

function loginCtrl($scope, $state) {
  $scope.variables = {
    showAlumnos: false,
    showProfesores: false
  };

  $scope.entrar = function () {
    $state.go('tab.lista');
  }
}
