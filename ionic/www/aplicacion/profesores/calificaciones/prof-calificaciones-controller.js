angular.module('starter')
  .controller('CalificacionesCtrl', controlador);

function controlador($scope, $ionicPopup) {
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

  $scope.data = {};

  $scope.cambiaNotaFinal = function () {
    $ionicPopup.show({
      template: '<input type="number" max="10" min="0" ng-model="data.notaFinal">',
      title: 'Nota final',
      subTitle: 'Indique la nota final del alumno',
      scope: $scope,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: '<b>Guardar</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.notaFinal) {
              e.preventDefault();
            } else {
              return $scope.data.notaFinal;
            }
          }
        }
      ]
    }).then(function(res) {
      console.log('Tapped!', res);
    });
  };

  $scope.editarNota = function (nota) {
    if(nota){
      $scope.data = {
        titulo: nota.titulo,
        puntuacion: nota.puntuacion,
        observaciones: nota.observaciones
      }
    }

    $ionicPopup.show({
      template:
        '<input type="text" placeholder="Título" ng-model="data.titulo"><br>' +
        '<input type="number" max="10" min="0" ng-model="data.puntuacion" placeholder="Puntuación"><br>' +
        '<textarea placeholder="Observaciones..." ng-model="data.observaciones">',
      title: 'Nota',
      subTitle: 'Introduce los datos correspondientes a la nota',
      scope: $scope,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: '<b>Guardar</b>',
          type: 'button-positive',
          onTap: function(e) {
            if ($scope.data.titulo && $scope.data.puntuacion && $scope.data.observaciones) {
              return {
                titulo: $scope.data.titulo,
                puntuacion: $scope.data.puntuacion,
                observaciones: $scope.data.observaciones
              };
            } else if($scope.data.titulo && $scope.data.puntuacion) {
              return {
                titulo: $scope.data.titulo,
                puntuacion: $scope.data.puntuacion,
                observaciones: 'Sin observaciones'
              };
            } else {
              e.preventDefault();
            }
          }
        }
      ]
    }).then(function(res) {
      console.log('Tapped!', res);
    });
  }
}
