/**
 * Created by sistemas on 28/04/2017.
 */
angular.module('starter')
  .controller('LoginCtrl', loginCtrl);

function loginCtrl($scope) {
  $scope.variables = {
    showAlumnos: false,
    showProfesores: false
  }
}
