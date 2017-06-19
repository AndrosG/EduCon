angular.module('starter')
  .controller('AluPerfilCtrl', controlador);

function controlador($scope, $ionicPopup, $state, ObtenerDatosSrv) {
  $scope.user = ObtenerDatosSrv.user.data;

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
