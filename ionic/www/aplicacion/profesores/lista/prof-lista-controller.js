angular.module('starter')
  .controller('PasarListaCtrl', controlador);

function controlador($scope) {
  $scope.asignaturas = [
    {
      id: 1,
      nombre: 'Matemáticas',
      curso: '1º ESO',
      alumnos: [
        {nombre: 'Jose Maria', apellidos: 'Fsadasdf'},
        {nombre: 'Pepito'},
        {nombre: 'Fulanito'}
      ],
      showAsig: false
    },
    {
      id: 2,
      nombre: 'Matemáticas',
      curso: '2º ESO',
      alumnos: [
        {nombre: 'Fran'},
        {nombre: 'Luis'},
        {nombre: 'Ana'}
      ],
      showAsig: false
    },
    {
      id: 3,
      nombre: 'Lengua',
      curso: '4º ESO',
      alumnos: [
        {nombre: 'Gustavo'},
        {nombre: 'Marisa'}
      ],
      showAsig: false
    }
  ];
}
