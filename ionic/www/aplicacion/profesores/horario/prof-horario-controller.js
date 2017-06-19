angular.module('starter')
  .controller('HorarioCtrl', controlador);

function controlador($scope, ObtenerDatosSrv, $http) {
  var SERVERURL = 'http://80.49.113.168:9095';

  $http.post(SERVERURL + '/horario_clase', { id_clase: ObtenerDatosSrv.user.data.id_clase })
    .then(function (res) {

    })
    .catch(function (err) {
      console.log(err);
    })
}
