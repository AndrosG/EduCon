angular.module('starter')
  .controller('CalendarioCtrl', controlador);

function controlador($scope) {
  $scope.eventos = [
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
  ];

  $scope.borrarEvento = function () {

  }
}
