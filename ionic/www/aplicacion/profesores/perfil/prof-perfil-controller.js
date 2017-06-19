angular.module('starter')
  .controller('PerfilCtrl', controlador);

function controlador($scope, $ionicPopup, $state, ObtenerDatosSrv, $http, $ionicLoading) {
  var SERVERURL = 'http://80.49.113.168:9095';

  $scope.user = ObtenerDatosSrv.user.data;

  $scope.cambiaPass = function (passActual, passNueva, passAComprobar) {
    if(passActual && passNueva && passAComprobar){
      if (passActual == $scope.user.contra && passNueva == passAComprobar){
        $ionicPopup.confirm({
          title: 'Cambiar contraseña',
          template: '¿Está seguro de que desea cambiar su contraseña?',
          cancelText: 'Cancelar'
        }).then(function(res) {
          if(res) {
            $http.post(SERVERURL + '/cambiarContrasena',
              { codigo: 1, id: $scope.user.id, contra: $scope.user.contra, nuevaContra: passNueva })
              .then(function () {
                $ionicLoading.show({
                  template: 'Se ha cambiado la contraseña con éxito',
                  noBackdrop: true,
                  duration: 2000
                });
              })
              .catch(function (err) {
                console.log(err);
              });
          }
        });
      } else {
        $ionicLoading.show({
          template: 'Fallo al comprobar la contraseña',
          noBackdrop: true,
          duration: 2000
        });
      }
    } else {
      $ionicLoading.show({
        template: 'Completa los campos obligatorios',
        noBackdrop: true,
        duration: 2000
      });
    }
  };

  $scope.cerrarSesion = function () {
    $ionicPopup.confirm({
      title: 'Cerrar sesión',
      template: '¿Está seguro de que desea cerrar sesión?',
      cancelText: 'Cancelar'
    }).then(function(res) {
      if(res) {
        ObtenerDatosSrv.user = {};
        $state.go('login');
      }
    });
  };
}
