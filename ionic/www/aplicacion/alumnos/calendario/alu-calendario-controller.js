angular.module('starter')
  .controller('AluCalendarioCtrl', controlador);

function controlador($scope, ObtenerDatosSrv, $http) {
  var SERVERURL = 'http://80.49.113.168:9095';
  $scope.eventos = [];

  $http.post(SERVERURL + '/eventos_alumno', {id_alumno: ObtenerDatosSrv.user.data.id})
    .then(function (res) {
      $scope.eventos = res.data;
    })
    .catch(function (err) {
      console.log(err);
    });

  /*$scope.eventos = [
   {
   titulo: 'Examen gramática',
   descripcion: 'Temas 3 y 4 + sintaxis',
   fecha: new Date(2017, 6, 3).toLocaleString('es')
   },
   {
   titulo: 'Examen matemáticas',
   descripcion: 'Tablas de multiplicar',
   fecha: new Date(2017, 5, 10).toLocaleString('es')
   }
   ];*/

  $scope.borrarEvento = function (e) {
    console.log(e);
    $http.post(SERVERURL + '/cambiarEvento', { id_evento: e.id_evento, visible: 0 })
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}
