angular.module('starter')
  .controller('PerfilCtrl', controlador);

function controlador($scope, $ionicPopup, $state) {
  $scope.cerrarSesion = function () {
    $ionicPopup.confirm({
      title: 'Cerrar sesión',
      template: '¿Está seguro de que desea cerrar sesión?',
      cancelText: 'Cancelar'
    }).then(function(res) {
      if(res) {
        $state.go('login');
      }
    });
  };
}
