angular.module('starter')
  .controller('AluHorarioCtrl', controlador);

function controlador($scope, ObtenerDatosSrv, $http) {
  var SERVERURL = 'http://80.49.113.168:9095';
  $scope.horario = {
    dia1: [],
    dia2: [],
    dia3: [],
    dia4: [],
    dia5: []
  };

  $http.post(SERVERURL + '/horario_clase', {id_clase: ObtenerDatosSrv.user.data.id_clase})
    .then(function (res) {
      for (var j = 0; j < res.data.length; j++) {
        if (res.data[j].dia_semana == 'LUNES') {
          $scope.horario.dia1.push(res.data[j]);
        } else if (res.data[j].dia_semana == 'MARTES') {
          $scope.horario.dia2.push(res.data[j]);
        } else if (res.data[j].dia_semana == 'MIERCOLES') {
          $scope.horario.dia3.push(res.data[j]);
        } else if (res.data[j].dia_semana == 'JUEVES') {
          $scope.horario.dia4.push(res.data[j]);
        } else if (res.data[j].dia_semana == 'VIERNES') {
          $scope.horario.dia5.push(res.data[j]);
        }
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
