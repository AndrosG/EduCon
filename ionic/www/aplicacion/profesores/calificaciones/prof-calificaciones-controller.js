angular.module('starter')
  .controller('CalificacionesCtrl', controlador);

function controlador($scope) {
  $scope.asignaturas = [
    {
      id: 1,
      nombre: 'Matemáticas',
      curso: '1º ESO',
      alumnos: [
        {nombre: 'Jose Maria', notas:[
          {titulo: 'Unidad 1', puntuacion: 8, observaciones: 'Muy bien hecho'},
          {titulo: 'Unidad 6', puntuacion: 6.3, observaciones: 'Regular'}
        ], showAlu: false, notaFinal: 8},
        {nombre: 'Pepito', showAlu: false, notaFinal: 5},
        {nombre: 'Fulanito', notas:[
          {titulo: 'Unidad 1', puntuacion: 10, observaciones: 'Muy bien hecho'},
          {titulo: 'Unidad 6', puntuacion: 8.6, observaciones: 'Ha faltado poco'}
        ], showAlu: false, notaFinal: 9.5}
      ],
      showAsig: false
    },
    {
      id: 2,
      nombre: 'Matemáticas',
      curso: '2º ESO',
      alumnos: [
        {nombre: 'Fran', showAlu: false, notaFinal: 8},
        {nombre: 'Luis', notas:[
          {titulo: 'Unidad 1', puntuacion: 4, observaciones: 'La próxima mejor'},
          {titulo: 'Unidad 4', puntuacion: 6.3, observaciones: 'Regular'}
        ], showAlu: false, notaFinal: 7},
        {nombre: 'Ana', showAlu: false, notaFinal: 5}
      ],
      showAsig: false
    },
    {
      id: 3,
      nombre: 'Lengua',
      curso: '4º ESO',
      alumnos: [
        {nombre: 'Gustavo', showAlu: false, notaFinal: 4},
        {nombre: 'Marisa', showAlu: false, notaFinal: 6}
      ],
      showAsig: false
    }
  ];
}
