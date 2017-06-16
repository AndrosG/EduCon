angular.module('starter')
  .controller('LoginCtrl', loginCtrl);

function loginCtrl($scope, $state, $http) {
  var SERVERURL = 'http://80.49.113.168:9095';

  $scope.variables = {
    showAlumnos: false,
    showProfesores: false
  };

  $scope.entrar = function (user, id, pass) {
    $http.post(SERVERURL + '/test')
      .then(function (result) {
        console.log(result);
      })
      .catch(function (err) {
        console.log(err);
      });
    if(user == 'alu'){
      if(id && pass){
        $http.post(SERVERURL + '/alumnos', {id: id, contra: pass})
          .then(function (result) {
            console.log(result);
            $state.go('tab-alu.notas');
          })
          .catch(function (err) {
            console.log(err);
          });
      } else {
        console.log('Fallo');
      }
    } else {
      if(id && pass){
        $http.post(SERVERURL + '/profesores', {usuario: id, contra: pass})
          .then(function (result) {
            console.log(result);
            $state.go('tab.lista');
          })
          .catch(function (err) {
            console.log(err);
          });
      } else {
        console.log('Fallo');
      }
    }
  }
}
