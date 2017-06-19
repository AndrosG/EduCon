angular.module('starter')
  .controller('AluNotasCtrl', controlador);

function controlador($scope, ObtenerDatosSrv, $http) {
  var SERVERURL = 'http://80.49.113.168:9095';
  $scope.asignaturas = [];
  $scope.notas = [];

  $http.post(SERVERURL + '/asignaturas_clase', { id_clase: ObtenerDatosSrv.user.data.id_clase })
    .then(function (res) {
      $scope.asignaturas = res.data;
      for(var i=0; i<$scope.asignaturas.length; i++){
        $scope.asignaturas[i].showAsig = false;
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  $http.post(SERVERURL + '/notas_alumno', { id_alumno: ObtenerDatosSrv.user.data.id })
    .then(function (res) {
      $scope.notas = res.data;
    })
    .catch(function (err) {
      console.log(err);
    });

  /*$scope.alumno = {
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
  };*/
}
