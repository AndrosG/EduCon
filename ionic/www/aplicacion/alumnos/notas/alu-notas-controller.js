angular.module('starter')
  .controller('AluNotasCtrl', controlador);

function controlador($scope) {
  $scope.alumno = {
    nombre: 'Daniel',
    apellidos: 'Carmona',
    asignaturas: [
      {id:1, nombre:'Matemáticas', curso:'2º DAM', showAsig:false, notaFinal: 9, notas:[
        {titulo:'Examen sorpresa', nota: 8, observaciones:'No te ha pillado por sorpresa'},
        {titulo:'Examen sorpresa', nota: 8, observaciones:'No te ha pillado por sorpresa'},
        {titulo:'Examen sorpresa', nota: 8, observaciones:'No te ha pillado por sorpresa'}
      ]},
      {id:2, nombre:'Inglés', curso:'2º DAM', showAsig:false, notaFinal: 9, notas:[
        {titulo:'Examen sorpresa', nota: 8, observaciones:'No te ha pillado por sorpresa'},
        {titulo:'Examen sorpresa', nota: 8, observaciones:'No te ha pillado por sorpresa'},
        {titulo:'Examen sorpresa', nota: 8, observaciones:'No te ha pillado por sorpresa'}
      ]},
      {id:3, nombre:'Programación', curso:'2º DAM', showAsig:false, notaFinal: 9},
      {id:4, nombre:'Android', curso:'2º DAM', showAsig:false, notaFinal: 9},
      {id:5, nombre:'Bases de datos', curso:'2º DAM', showAsig:false, notaFinal: 9, notas:[
        {titulo:'Examen sorpresa', nota: 8, observaciones:'No te ha pillado por sorpresa'},
        {titulo:'Examen sorpresa', nota: 8, observaciones:'No te ha pillado por sorpresa'},
        {titulo:'Examen sorpresa', nota: 8, observaciones:'No te ha pillado por sorpresa'}
      ]},
      {id:6, nombre:'Sistemas informáticos', curso:'2º DAM', showAsig:false, notaFinal: 9},
    ]
  };
}
