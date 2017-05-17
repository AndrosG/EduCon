angular.module('starter')
  .controller('LoginCtrl', loginCtrl);

function loginCtrl($scope, $state, $http) {
  var SERVERURL = 'http://10.1.1.138:9095';

  $scope.variables = {
    showAlumnos: false,
    showProfesores: false
  };

  $scope.entrar = function (user) {
    if(user == 'alu'){
      $state.go('tab-alu.notas');
    } else {
      $state.go('tab.lista');
    }
  }

  $http.post(SERVERURL +'/alumnos', {id: 1})
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      console.log(err);
    });
}
